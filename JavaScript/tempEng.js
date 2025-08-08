// async function getTemplateHTML(tempFileName) {
//     const url = `Templates/${tempFileName}`
//     const response = await fetch(url)
//     if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//     }
//     const templateHTML = await response.text()
//     return templateHTML
// }

// async function tagTemplate(tempFileName, tempId, repoId) {
//     const templateHTML = await getTemplateHTML(tempFileName);

//     const templateRepository = document.getElementById(repoId)
//     const newTemplate = document.createElement("template");
    
//     console.log("templateHTML:", templateHTML)
//     console.log("is string:", typeof templateHTML === "string")
//     newTemplate.innerHTML = templateHTML
//     newTemplate.id = tempId

//     console.log("newtemp:", newTemplate.content.children)

//     templateRepository.appendChild(newTemplate)
// }

// // async function insertTemplate(template, designation){
// //     const designationElement = document.getElementById(designation)
// //     const html = template;
// //     designationElement.innerHTML = html
// // }
// async function insertTemplate(template, designation){
//     const designationElement = document.querySelector(`[data-insert-template="${designation}"]`)
//     console.log(template)
//     const clon = document.getElementById(template).content.cloneNode(true);
//     designationElement.appendChild(clon)
// }

// async function findRequiredTemplates() {
//     const listRequiredTemplates = document.querySelectorAll("[data-insert-template]")

//     for (let RequiredTemplate of listRequiredTemplates) {
//         const templateFileName = RequiredTemplate.dataset.insertTemplate
//         const templateId = templateFileName.replace(".html", "")

//         await tagTemplate(templateFileName, templateId, "templates-repository")
//         // tagTemplate(tempFileName, tempId, repoId)
//         // insertTemplate(templateId, templateFileName)
//     }
// }
// findRequiredTemplates()








//     fetch(url)
//         .then(
//             response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.text(); // Returns a Promise
//             }
//         )
//         .then(
//             data => {
//                 return data; // Processes the resolved JSON data
//                 // Further operations with 'data' can be performed here
//             }
//         )
//         .catch(
//             error => {
//                 console.error('There was a problem with the fetch operation:', error);
//             }
//         );  

// repository-templates




// function tempTagHTML(html, tempId, repoId) {
//     const newTemplate = document.createElement("template");
//     newTemplate.content = html
//     newTemplate.id = tempId
//     const tempRepo = document.getElementById(repoId)
//     tempRepo.appendChild(newTemplate)
// }








// const tempFileName = "navbar.html"
// const url = `Templates/${tempFileName}`



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


// function createTemplateObj(html, id) {
//     const newTemplate = document.createElement("template")
//     newTemplate.id = id
//     newTemplate.innerHTML = html

//     return newTemplate
// }


// function insertDocObj(docObj, destinationAttr) {
//     const destinationElem = document.querySelector(destinationAttr)
//     destinationElem.appendChild(docObj)
// }
// function waitTillTrue(condition, interval = 100) {
//     const condition = setInterval( 100)
//     if (condition) {
//         clearInterval()
//     }



//     return new Promise(resolve => {
//         const checkInterval = setInterval(() => {
//             if (condition) {
//                 clearInterval(checkInterval);
//                 resolve();
//                 console.log("donneen")
//             }
//         }, interval);
//     });
// }




