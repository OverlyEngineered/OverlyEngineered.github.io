class OE_TemplatingEngine {
    constructor(directoryPath, tempRepoAttr) {
        this.directoryPath = directoryPath
        this.tempRepoAttr = tempRepoAttr
        this.templateDict = {
            navbar: {
                fileName: "navbar.html",
                loaded: false
            },
        }
    }

    loadTemplate(tempFileKey) {
        const pathToTemp = this.directoryPath
        const newTempId = tempFileKey
        const tempFileName = this.templateDict[tempFileKey].fileName

        const url = pathToTemp + tempFileName

        fetch(url)
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
                    const tempHTML = data.toString()


                    //ANCHOR - Create Template
                    const newTemplate = document.createElement("template")
                    newTemplate.id = newTempId
                    newTemplate.innerHTML = tempHTML

                    //ANCHOR - Insert (append) Template To Repository
                    const tempRepo = document.querySelector(this.tempRepoAttr)
                    tempRepo.appendChild(newTemplate)

                    this.templateDict[tempFileKey].loaded = true
                    console.log(tempFileKey + "loaded")

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