async function getTemplateHTML(tempFileName) {
    const url = `Templates/${tempFileName}`
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    const templateHTML = await response.text()
    return templateHTML
}

async function tagTemplate(tempFileName, tempId, repoId) {
    const templateHTML = await getTemplateHTML(tempFileName);

    const templateRepository = document.getElementById(repoId)
    const newTemplate = document.createElement("template");
    
    console.log("templateHTML:", templateHTML)
    console.log("is string:", typeof templateHTML === "string")
    newTemplate.innerHTML = templateHTML
    newTemplate.id = tempId

    console.log("newtemp:", newTemplate.content.children)

    templateRepository.appendChild(newTemplate)
}

// async function insertTemplate(template, designation){
//     const designationElement = document.getElementById(designation)
//     const html = template;
//     designationElement.innerHTML = html
// }
async function insertTemplate(template, designation){
    const designationElement = document.querySelector(`[data-insert-template="${designation}"]`)
    console.log(template)
    const clon = document.getElementById(template).content.cloneNode(true);
    designationElement.appendChild(clon)
}

async function findRequiredTemplates() {
    const listRequiredTemplates = document.querySelectorAll("[data-insert-template]")

    for (let RequiredTemplate of listRequiredTemplates) {
        const templateFileName = RequiredTemplate.dataset.insertTemplate
        const templateId = templateFileName.replace(".html", "")

        await tagTemplate(templateFileName, templateId, "templates-repository")
        // tagTemplate(tempFileName, tempId, repoId)
        // insertTemplate(templateId, templateFileName)
    }
}
findRequiredTemplates()








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

// fetch(url)
//     .then(
//         response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.text(); // Returns a Promise
//         }
//     )
//     .then(
//         data => {
//             return data; // Processes the resolved JSON data
//             // Further operations with 'data' can be performed here
//         }
//     )
//     .catch(
//         error => {
//             console.error('There was a problem with the fetch operation:', error);
//         }
//     );