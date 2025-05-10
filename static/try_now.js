document.addEventListener("DOMContentLoaded", () => {
    // Elements
    const uploadForm = document.getElementById("uploadForm");
    const uploadContainer = document.getElementById("uploadContainer");
    const dropArea = document.getElementById("dropArea");
    const browseButton = document.getElementById("browseButton");
    const cancelButton = document.getElementById("cancelButton");
    const analyzeButton = document.getElementById("analyzeButton");
    const loadingOverlay = document.getElementById("loadingOverlay");
    const resultsContainer = document.getElementById("resultsContainer");
    const uploadedImage = document.getElementById("uploadedImage");
    const maturityBadge = document.getElementById("maturityBadge");
    const resultDescription = document.getElementById("resultDescription");
    const tipsList = document.getElementById("tipsList");
    const tryAgainButton = document.getElementById("tryAgainButton");
    const downloadButton = document.getElementById("downloadButton");
  
    let fileInput = document.getElementById("fileInput"); // Initialize fileInput
  
    // Function to attach file input event listeners
    function attachFileInputListeners() {
      fileInput.addEventListener("change", () => {
        if (fileInput.files.length > 0) {
          const file = fileInput.files[0];
          validateAndPreviewFile(file);
        }
      });
    }
  
    // Initial file input event listener
    attachFileInputListeners();
  
    // Click browse button to trigger file input
    browseButton.addEventListener("click", () => {
      fileInput.click();
    });
  
    // Drag and drop events
    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      dropArea.addEventListener(eventName, preventDefaults, false);
    });
  
    function preventDefaults(e) {
      e.preventDefault();
      e.stopPropagation();
    }
  
    ["dragenter", "dragover"].forEach((eventName) => {
      dropArea.addEventListener(eventName, highlight, false);
    });
  
    ["dragleave", "drop"].forEach((eventName) => {
      dropArea.addEventListener(eventName, unhighlight, false);
    });
  
    function highlight() {
      dropArea.classList.add("drag-over");
    }
  
    function unhighlight() {
      dropArea.classList.remove("drag-over");
    }
  
    dropArea.addEventListener("drop", handleDrop, false);
  
    function handleDrop(e) {
      const dt = e.dataTransfer;
      const file = dt.files[0];
      validateAndPreviewFile(file);
    }
  
    // Validate and preview file
    function validateAndPreviewFile(file) {
      // Check file type
      const validTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (!validTypes.includes(file.type)) {
        alert("Please upload a valid image file (JPEG or PNG)");
        return;
      }
  
      // Check file size (25MB max)
      if (file.size > 25 * 1024 * 1024) {
        alert("File size exceeds 25MB limit");
        return;
      }
  
      // Preview file name
      const fileName = file.name;
      dropArea.innerHTML = `
        <div class="upload-icon">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M56 40H48C44.6863 40 42 42.6863 42 46C42 49.3137 44.6863 52 48 52H56" stroke="#D97706" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 40H16C19.3137 40 22 42.6863 22 46C22 49.3137 19.3137 52 16 52H8" stroke="#D97706" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 40C8 30.5719 8 25.8579 10.9289 22.9289C13.8579 20 18.5719 20 28 20H36C45.4281 20 50.1421 20 53.0711 22.9289C56 25.8579 56 30.5719 56 40V52H8V40Z" fill="#D97706" stroke="#D97706" stroke-width="3"/>
            <path d="M32 16V28M32 16L24 24M32 16L40 24" stroke="#D97706" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <p class="drop-text">File selected: ${fileName}</p>
        <p class="format-text">Click "Analyze" to continue</p>
        <button type="button" class="browse-button" id="changeFileButton">Change File</button>
      `;
  
      // Re-attach event listener to new button
      document.getElementById("changeFileButton").addEventListener("click", () => {
        fileInput.click();
      });
    }
  
    // Cancel button click
    cancelButton.addEventListener("click", () => {
      window.location.href = "/";
    });
  
    // Form submission
    uploadForm.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      if (!fileInput.files.length) {
        alert("Please select a file to upload");
        return;
      }
  
      // Show loading overlay
      loadingOverlay.style.display = "flex";
  
      // Prepare form data
      const formData = new FormData();
      formData.append("image", fileInput.files[0]);
  
      try {
        // Make API call to /predict endpoint
        const response = await fetch("/predict", {
          method: "POST",
          body: formData,
        });
  
        // Hide loading overlay
        loadingOverlay.style.display = "none";
  
        // Check if response is successful
        if (!response.ok) {
          const errorData = await response.json();
          alert(`Error: ${errorData.error}`);
          return;
        }
  
        // Get the prediction result
        const result = await response.json();
        const maturity = result.maturity;
  
        // Get the file for preview
        const file = fileInput.files[0];
  
        // Display results
        displayResults(maturity, file);
      } catch (error) {
        // Hide loading overlay
        loadingOverlay.style.display = "none";
        alert(`Error: ${error.message}`);
      }
    });
  
    // Display results
    function displayResults(maturity, file) {
      // Hide upload container
      uploadContainer.style.display = "none";
  
      // Show results container
      resultsContainer.style.display = "block";
  
      // Set uploaded image
      const imageUrl = URL.createObjectURL(file);
      uploadedImage.src = imageUrl;
  
      // Set maturity badge
      maturityBadge.className = "maturity-badge";
      maturityBadge.classList.add(maturity);
  
      let maturityText = "";
      let description = "";
      let tips = [];
  
      // Set content based on maturity level
      switch (maturity) {
        case "unripe":
          maturityText = "Unripe";
          description = "This pineapple is not yet ready to eat. The flesh will be hard and sour.";
          tips = [
            "Store at room temperature to continue ripening",
            "Wait 2-3 days before consuming",
            "Check for yellowing of the skin as it ripens",
            "Avoid refrigeration as it slows the ripening process",
          ];
          break;
  
        case "half-ripe":
          maturityText = "Half Ripe";
          description =
            "This pineapple is starting to ripen but isn't fully ready yet. It will be slightly sweet but still firm.";
          tips = [
            "Can be consumed now if you prefer less sweetness",
            "Wait 1-2 days for optimal ripeness",
            "Store at room temperature to continue ripening",
            "The bottom should yield slightly to pressure when fully ripe",
          ];
          break;
  
        case "ripe":
          maturityText = "Perfectly Ripe";
          description = "Perfect! This pineapple is at its peak ripeness. Sweet, juicy, and ready to eat.";
          tips = [
            "Consume within 2-3 days for best flavor",
            "Refrigerate to maintain freshness",
            "Cut and store unused portions in an airtight container",
            "Freeze chunks for smoothies or desserts",
          ];
          break;
  
        case "over-ripe":
          maturityText = "Over Ripe";
          description =
            "This pineapple is past its prime. The flesh may be very soft and overly sweet or starting to ferment.";
          tips = [
            "Best used immediately in cooking or smoothies",
            "Check for any signs of spoilage before consuming",
            "Use in baking where extra sweetness is desired",
            "Consider using in marinades or sauces",
          ];
          break;
  
        default:
          maturityText = "Analysis Complete";
          description = "We've analyzed your pineapple image.";
          tips = ["Check the maturity level above for specific recommendations"];
      }
  
      maturityBadge.textContent = maturityText;
      resultDescription.textContent = description;
  
      // Set tips
      tipsList.innerHTML = "";
      tips.forEach((tip) => {
        const li = document.createElement("li");
        li.textContent = tip;
        tipsList.appendChild(li);
      });
    }
  
    // Try again button
    tryAgainButton.addEventListener("click", () => {
      // Reset form
      uploadForm.reset();
  
      // Reset drop area
      dropArea.innerHTML = `
        <div class="upload-icon">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 16V40M32 16L24 24M32 16L40 24" stroke="#D97706" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M56 40H48C44.6863 40 42 42.6863 42 46C42 49.3137 44.6863 52 48 52H56" stroke="#D97706" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 40H16C19.3137 40 22 42.6863 22 46C22 49.3137 19.3137 52 16 52H8" stroke="#D97706" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 40C8 30.5719 8 25.8579 10.9289 22.9289C13.8579 20 18.5719 20 28 20H36C45.4281 20 50.1421 20 53.0711 22.9289C56 25.8579 56 30.5719 56 40V52H8V40Z" stroke="#D97706" stroke-width="3"/>
          </svg>
        </div>
        <p class="drop-text">Drop file or browse</p>
        <p class="format-text">Format: .jpeg, .png & Max file size: 25 MB</p>
        <input type="file" id="fileInput" name="image" accept=".jpg,.jpeg,.png" class="file-input" required />
        <button type="button" class="browse-button" id="browseButton">Browse Files</button>
      `;
  
      // Update fileInput reference to the new element
      fileInput = document.getElementById("fileInput");
  
      // Re-attach file input event listeners
      attachFileInputListeners();
  
      // Re-attach browse button event listener
      const newBrowseButton = document.getElementById("browseButton");
      newBrowseButton.addEventListener("click", () => {
        fileInput.click();
      });
  
      // Re-attach drop area event listeners
      ["dragenter", "dragover"].forEach((eventName) => {
        dropArea.addEventListener(eventName, highlight, false);
      });
      ["dragleave", "drop"].forEach((eventName) => {
        dropArea.addEventListener(eventName, unhighlight, false);
      });
      dropArea.addEventListener("drop", handleDrop, false);
  
      // Hide results container
      resultsContainer.style.display = "none";
  
      // Show upload container
      uploadContainer.style.display = "block";
  
      // Clean up previous image URL
      if (uploadedImage.src) {
        URL.revokeObjectURL(uploadedImage.src);
        uploadedImage.src = "";
      }
    });
  
    // Download results button
    downloadButton.addEventListener("click", () => {
      // Create a simple text summary
      const maturityText = maturityBadge.textContent;
      const description = resultDescription.textContent;
  
      let tipText = "Tips:\n";
      const tips = tipsList.querySelectorAll("li");
      tips.forEach((tip) => {
        tipText += `- ${tip.textContent}\n`;
      });
  
      const summary = `RipenScan Analysis Results\n\nMaturity: ${maturityText}\n\n${description}\n\n${tipText}\n\nAnalyzed on: ${new Date().toLocaleString()}`;
  
      // Create a blob and download link
      const blob = new Blob([summary], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
  
      const a = document.createElement("a");
      a.href = url;
      a.download = "ripenscan-results.txt";
      document.body.appendChild(a);
      a.click();
  
      // Clean up
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 100);
    });
  });