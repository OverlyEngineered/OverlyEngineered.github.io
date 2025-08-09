class OE_TemplatingEngine {
    constructor(templateDirectoryPath, templateRepositoryId, AllTemplateData) {
        this.templateDirectoryPath = templateDirectoryPath
        this.templateRepository = document.getElementById(templateRepositoryId)
        this.AllTemplateData = AllTemplateData
    }
    getTemplate() {

    }


    loadTemplate(newTemplateKey) {
        const newTemplateData = AllTemplateData[newTemplateKey];
        const newTemplateDirectoryPath = this.templateDirectoryPath;
        const newTemplateFileName = newTemplateData.fileName;
        const newTemplateFilePath = newTemplateDirectoryPath + newTemplateFileName;
        const newTemplateName = newTemplateKey;


        
        const newTemplateRepository = this.templateRepository;
        
        fetch(newTemplateFilePath)
            .then(
                response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text(); // Returns a Promise
                }
            )
            .then(
                data => {
                    const newtemplateHTML = data.toString();

                    //ANCHOR - Create Template
                    const newTemplate = document.createElement("template");
                    newTemplate.setAttribute("data-template-name", newTemplateName);
                    newTemplate.innerHTML = newtemplateHTML;

                    //ANCHOR - Load (append) Template To Repository
                    newTemplateRepository.appendChild(newTemplate);
                    this.AllTemplateData[newTemplateKey].loaded = true;
                    return data; // Processes the resolved JSON data
                }
            )
            .catch(
                error => {
                    console.error('There was a problem with the fetch operation:', error);
                }
            ); 
    }

    insertTemplate(templateId, destinationRef) {
        const tempLoaded = new Promise((resolve, reject) => {
            const checkingIsTempLoaded = setInterval(() => {
                const isTempLoaded = this.templateDict[templateId].loaded
                if (isTempLoaded) {
                    resolve("The " + templateId + " template is loaded")
                    console.log("The " + templateId + " template is loaded")
                    clearInterval(checkingIsTempLoaded)
                }
            }, 100)
            
        })
        .then(() => {
            console.log("temmplate ref", document.querySelector("#" + templateId))
            const tempClone = document.querySelector("#" + templateId).content.cloneNode(true);
            console.log("tempClone", tempClone)
            destinationRef.appendChild(tempClone) 

        })
        .catch((error) => {
            console.error(error)
        })

    }
}
console.log("begin")
templatingEngine = new OE_TemplatingEngine("Templates/", "#template-repository")
templatingEngine.loadTemplate("navbar")
const designationElement = document.querySelector('[data-insert-template="navbar"]')
console.log("designationElement", designationElement)

templatingEngine.insertTemplate("navbar", designationElement)





myDirectoryPath = "Templates/"
MyTempRepoId = "#template-repository"

myTemplates = {
    navbar: {
        fileName: "navbar.html",
        loaded: false
    },
    footer: {
        fileName: "footer.html",
        loaded: false
    }

}
templatingEngine = new OE_TemplatingEngine(myDirectoryPath, MyTempRepoId, myTemplates)
