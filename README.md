## Programming Exercise - README.md :

by Scott Patten scopatten@gmail.com - JAN 21, 2016

## User Story:
As a teacher, I want to enter a list of student names along with his or her test score on a page, so I may see a summary of my class’ performance on a test. The summary shall include the min, max, and average grade.

## Acceptance Criteria:
The list shall support CRUD operations on student names and his or her associated grade.

The list shall support in-line editing of student names and grades, such that changing a test score and pressing enter (or clicking away from the input field) updates the model. Statistics shall automatically update after CRUD operations are performed. 

The list shall validate user input. Students in the list with a grade < 65 shall be highlighted to indicate a failing grade. 

## Installation Instructions:
### Clone repository
Clone the repository locally: 

```git clone  https://github.com/ScopatGames/test-score-stats.git <directory>```

Change directory to the new cloned repository.

### Install packages
Install bower dependencies:

```bower install```

Install npm dependencies:

```npm install```

### Start local server
Start a local server with gulp:

```gulp serve```

Open browser to localhost, port 3000:


## Usage:
The application will try to use local storage.  If it is not available, it will revert to using default data.  This data will not be persistent from session to session unless local storage is available.

Use the 'Add New Student' button to create a new data entry.

Data entries may be edited in-line.  Model updates happen on 'return' or loss of field focus.  

Delete individual entries by clicking the 'x' to the right of the entry.  Delete all entries by clicking the 'Clear Data' button.  These deletes update the model.  


