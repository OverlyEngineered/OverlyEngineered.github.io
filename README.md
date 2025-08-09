# OverlyEngineered.github.io
This repository is holds my personal website I use to showcase my skills and talk about myself. My previous personal website https://trollfacedgamer.github.io/ no longer works due to a recent username change from TrollFacedGamer to OverlyEngineered.

## Class `OE_TemplatingEngine`

### data-* Attributes
`data-insert-template="<name of template>"`

The value of the data attribute `data-insert-template` has to be a **string**. The string is used by the instances of the `OE_TemplatingEngine` class as a dictionary key to identity which template to append into the elements holding the `data-insert-template` data attribute.

### Function List
`getTemplate(fileName)`


Gets and then return the HTML of the template with the file name specified by the parameter `fileName`.

---
`tagTemplate(html, tempId, repoId)`

Takes the HTML code from the `html` parameter, then put it into a template tag, then assign the string from the `tempId` as the id attribute of the new template tag, and then deposited it into the element specified by the `repoId` parameter.

---
`insertTemplate(tempId, location)`

Add the template specified by the `tempId` parameter to the element specified by the `location` parameter.

The `location` parameter can be a id, class, or attribute.

Dict
First layer
Key: Dict
The dict keys for the fist layer of the dict is the name of the template.

Second layer

this.templateDict = {
    navbar: {
        fileName: "navbar.html",
        loaded: false
    },
}

The fileName is to be the file name of the html file that holds the htmml you want to be in the template tag.
The Loaded holds a boolean value that repersents weather the template is loaded or not. This exists to insure thhat the code doesn't try to use a empty template tag.

`loadTemplate()`

Fecths the html file associated with a template and addeds it as the current document as a template tag. To the template can referenced though the \[data-template-name] the name is equal to the one used in the first layer of the dict as the key