Normal Page
Post request sequence
    browser -> server post request
    server -> browser get notes (updates the page after post request)
    browser -> get request CSS
    server -> browser CSS
    browser -> get request JS
    server -> browser JS
    browser -> get request data.json
    server -> browser data.json

Single Page App
    browser -> server post server immediately is updated. This uses AJAX
