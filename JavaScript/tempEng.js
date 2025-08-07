// fetch('https://api.example.com/data')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json(); // Returns a Promise
//   })
//   .then(data => {
//     console.log('Fetched data:', data); // Processes the resolved JSON data
//     // Further operations with 'data' can be performed here
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });

async function getTemplate(tempFileName) {
    url = `/Templates/${tempFileName}`

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
                console.log(data)
                insertTemplate(data, "navbar-location")




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

function insertTemplate(template, designation){
    const designationElement = document.getElementById(designation)
    const html = template;
    designationElement.innerHTML = html
}

getTemplate("navbar.html")

