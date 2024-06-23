function addSpacesToSlashes() {
    // Get all paragraphs on the page
    const paragraphs = document.getElementsByTagName("p");
  
    // Loop through each paragraph
    for (let i = 0; i < paragraphs.length; i++) {
      const paragraph = paragraphs[i];
      const text = paragraph.textContent;
  
      // Replace all instances of '/' with '/ '
      paragraph.textContent = text.replace(/\//g, " / ");
    }
  }

addSpacesToSlashes();