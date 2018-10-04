# empresa_estudio
Task #1

- For this task, you need to have some setup on your PC. Follow each requirement of the task and install the needed tools, libraries, files, etc.. Instillation guides can be found on the website for that tool (I'm assuming you already checked all of these websites during the past couple of days)

- Please work on each requirement of this task in an individual branch, and if you have any questions or if you got stuck in any requirement, please reach out to me ASAP. 

- Please make sure to write a clean and readable code.

This task covers the following topics: BS V3, LESS, JS/JQuery, CSS, flex, Ajax/JSON, Grunt, Git, BS V4, Node modules.

For this task you are to build a page called "estudio" for the company "empresa". This page contains a set of rooms. Each room has a name, image, id, and style. Customers can select any room from the page to view it. Customers can also filter the rooms based on the id & the style.


Requirements:
1- Create an appropriate JSON for the rooms.
2- Create an Ajax request to get the JSON file.
3- Create the above UI structure.
4- Implement a responsive design for the page (4 rooms on desktop, 3 on tablets, 2 on mobile, and 1 on extra small devices)
5- Create a filter for the rooms to filter the rooms based on the id or style: when performing a filter action, if the customer refreshes the page, the filter action must be saved (don't use any type of local storage or cookies)
6- Create a task to compile the LESS file into CSS and watch for changes.
7- Create a package.json file for your needed dependencies.

Design considerations:
- Make sure that your code supports both BS V3 & BS V4
- All styles should be written in LESS format.
- Install the needed LESS compiler using npm modules.
- The page should scroll to display all the rooms.
- The header is fixed while scrolling.
- The website logo should be created using CSS (not an image)
- Clicking on the image should display the full image in a modal.
- Hovering over the image should animate the title from the bottom and enlarge the image.
- Use the same colors from the image.

Development considerations:
- You should have 7 branches for the above requirements.
- Start the requirements in the same order.
- Use Jquery in your code.
- Use success and fail functions in your Ajax, and handle "request timed out: case.
