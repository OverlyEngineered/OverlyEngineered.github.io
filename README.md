# OverlyEngineered.github.io
This my my personal website I use to showcase my skills. My previous personal website https://trollfacedgamer.github.io/ no longer works due to a recent username change from TrollFacedGamer to OverlyEngineered.



## Templating Engine

### data-* Attribute
data-insert-template=\<name of template>

### Function List
``getTemplate(fileName)``

Gets and then return the HTML of the template with the file name specified by the parameter ``fileName``.

---
``tagTemplate(html, tempId, repoId)``

Takes the HTML code from the ``html`` parameter, then put it into a template tag, then assign the string from the ``tempId`` as the id attribute of the new template tag, and then deposited it into the element specified by the ``repoId`` parameter.

---
``insertTemplate(tempId, location)``

Add the template specified by the ``tempId`` parameter to the element specified by the ``location`` parameter.

The ``location`` parameter can be a id, class, or attribute.