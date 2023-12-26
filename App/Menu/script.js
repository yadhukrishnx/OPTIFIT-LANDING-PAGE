document.getElementById('customMessage').addEventListener('input', function () {
    var customMessage = encodeURIComponent(document.getElementById('customMessage').value);
    var whatsappLink = 'https://wa.me/?text=' + customMessage;
    document.getElementById('whatsappShareBtn').setAttribute('href', whatsappLink);
});
function addWorkout() {
    var workoutName = document.getElementById('workoutName').value;
    var exerciseList = document.getElementById('exerciseList').value;

    if (workoutName && exerciseList) {
        var workoutList = document.getElementById('workoutList');
        var listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = workoutName;

        // Add click event to show workout details
        listItem.addEventListener('click', function () {
            showWorkoutDetails(workoutName, exerciseList);
        });

        workoutList.appendChild(listItem);

        // Clear form fields
        document.getElementById('workoutForm').reset();
    }
}

function showWorkoutDetails(name, exercises) {
    document.getElementById('workoutDetailsName').textContent = name;
    document.getElementById('workoutDetailsExercises').textContent = exercises;

    // Show the modal
    $('#workoutDetailsModal').modal('show');
}
function addSelectedWorkouts() {
    var workoutSelection = document.getElementById('workoutSelection');
    var selectedWorkoutsList = document.getElementById('selectedWorkoutsList');

    // Clear the selected workouts list before adding new ones
    selectedWorkoutsList.innerHTML = '';

    // Iterate through the checkboxes to find selected workouts
    for (var i = 0; i < workoutSelection.children.length; i++) {
        var checkbox = workoutSelection.children[i].querySelector('.form-check-input');
        if (checkbox.checked) {
            var exerciseName = checkbox.value;

            // Create a list item for each selected workout
            var listItem = document.createElement('div');
            listItem.className = 'selected-workout-item';
            listItem.innerHTML = '<span>' + exerciseName + '</span>';

            // Append the list item to the container
            selectedWorkoutsList.appendChild(listItem);
        }
    }
}

function addWorkoutPlan() {
    var workoutPlanName = document.getElementById('workoutPlanName').value;
    var selectedWorkoutsList = document.getElementById('selectedWorkoutsList');
    var repCounts = [];

    // Iterate through the selected workout items and get rep counts
    for (var i = 0; i < selectedWorkoutsList.children.length; i++) {
        var exerciseName = selectedWorkoutsList.children[i].textContent;
        var repCount = prompt('Enter rep count for ' + exerciseName + ':');
        repCounts.push({ exercise: exerciseName, reps: repCount });
    }

    if (workoutPlanName && repCounts.length > 0) {
        // You can use repCounts array to save or display workout plan details
        console.log('Workout Plan Name:', workoutPlanName);
        console.log('Workouts and Reps:', repCounts);

        // Clear form fields and selected workout list
        document.getElementById('workoutPlanForm').reset();
        selectedWorkoutsList.innerHTML = '';
    }
}
function addWorkout() {
    var workoutName = document.getElementById('workoutName').value;
    var exerciseList = document.getElementById('exerciseList').value;

    if (workoutName && exerciseList) {
        var workoutList = document.getElementById('workoutList');
        var listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = workoutName;

        // Add click event to show workout details
        listItem.addEventListener('click', function () {
            showWorkoutDetails(workoutName, exerciseList);
        });

        workoutList.appendChild(listItem);

        // Clear form fields
        document.getElementById('workoutForm').reset();
    }
}

function showWorkoutDetails(name, exercises, reps) {
    document.getElementById('workoutDetailsName').textContent = name;
    document.getElementById('workoutDetailsExercises').textContent = 'Exercises: ' + exercises;
    document.getElementById('workoutDetailsReps').textContent = 'Reps: ' + reps;

    // Show the modal
    $('#workoutDetailsModal').modal('show');
}

function sendWorkoutToFriend() {
    var friendName = document.getElementById('friendSelection').value;
    var workoutDetails = 'Workout Name: ' + document.getElementById('workoutDetailsName').textContent +
                         '\nExercises: ' + document.getElementById('workoutDetailsExercises').textContent +
                         '\nReps: ' + document.getElementById('workoutDetailsReps').textContent;

    alert('Sending workout details to ' + friendName + ':\n\n' + workoutDetails);
    // Implement your logic to send workout details to the selected friend
    // For example, you might send this information to a server or via a messaging service
    // For simplicity, this example shows an alert
}


function addWorkoutPlan() {
    var workoutPlanName = document.getElementById('workoutPlanName').value;
    var selectedWorkoutsList = document.getElementById('selectedWorkoutsList');
    var repCounts = [];

    // Iterate through the selected workout items and get rep counts
    for (var i = 0; i < selectedWorkoutsList.children.length; i++) {
        var exerciseName = selectedWorkoutsList.children[i].textContent;
        var repCount = prompt('Enter rep count for ' + exerciseName + ':');
        repCounts.push({ exercise: exerciseName, reps: repCount });
    }

    if (workoutPlanName && repCounts.length > 0) {
        // Display added workouts in the My Workouts modal
        var addedWorkoutsList = document.getElementById('addedWorkoutsList');
        addedWorkoutsList.innerHTML = '';
        repCounts.forEach(function (workout) {
            var workoutItem = document.createElement('li');
            workoutItem.textContent = workout.exercise + ' - Reps: ' + workout.reps;
            addedWorkoutsList.appendChild(workoutItem);
        });

        // Open the My Workouts modal
        $('#myWorkoutsModal').modal('show');
    }
}

function shareOnWhatsApp() {
    var workoutPlanName = document.getElementById('workoutPlanName').value;
    var workoutDetails = '';
    var addedWorkoutsList = document.getElementById('addedWorkoutsList');

    // Iterate through the added workout items and build workout details
    for (var i = 0; i < addedWorkoutsList.children.length; i++) {
        var workoutItem = addedWorkoutsList.children[i];
        workoutDetails += workoutItem.textContent + '\n';
    }

    // Set the workout plan details in the Sharing Modal
    document.getElementById('workoutPlanTitle').textContent = workoutPlanName;
    document.getElementById('workoutPlanDetails').textContent = workoutDetails;

    // Open the Sharing Modal
    $('#sharingModal').modal('show');
}