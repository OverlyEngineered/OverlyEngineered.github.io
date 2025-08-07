async function getTemplate(tempFileName) {
    url = `Templates/${tempFileName}`

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
                return data; // Processes the resolved JSON data
                // Further operations with 'data' can be performed here
            }
        )
        .catch(
            error => {
                console.error('There was a problem with the fetch operation:', error);
            }
        );  
}

// repository-templates







// function tempTagHTML(html, tempId, repoId) {
//     const newTemplate = document.createElement("template");
//     newTemplate.content = html
//     newTemplate.id = tempId
//     const tempRepo = document.getElementById(repoId)
//     tempRepo.appendChild(newTemplate)
// }

function insertTemplate(template, designation){
    const designationElement = document.getElementById(designation)
    const html = template;
    designationElement.innerHTML = html
}


async function tagTemplate(tempFileName, tempId, repoId) {
    const templateHTML = await getTemplate(tempFileName).then();
    console.log("templateHTML:", templateHTML)
    const templateRepository = document.getElementById(repoId)

    const newTemplate = document.createElement("template");
    newTemplate.content = templateHTML
    newTemplate.id = tempId
    templateRepository.appendChild(newTemplate)
}





url = `Templates/${tempFileName}`

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
            return data; // Processes the resolved JSON data
            // Further operations with 'data' can be performed here
        }
    )
    .catch(
        error => {
            console.error('There was a problem with the fetch operation:', error);
        }
    );  