(function() {
    'use strict';

    angular
        .module('app')
        .controller('State8Controller', State8Controller);

    State8Controller.$inject = ['$filter', 'ToDoListFactory', 'localStorageService', '$state', 'authService', 'ChirperFactory', '$log'];



    /* @ngInject */
    function State8Controller($filter, ToDoListFactory, localStorageService, $state, authService, ChirperFactory, $log) {
        //using vm
        var vm = this;

        //hide entry form
        vm.edit = false;
        vm.editToDo = false;

        vm.hovering = false;
        vm.hovering1 = false;

        vm.Chirps =



            // show entry form when click +Add new
            vm.addNew = function() {
                vm.edit = true;
            };

        vm.addNewToDo = function() {
            vm.editToDo = true;
        };

        vm.logout = function() {
            authService.logout()
        };


        // activate();

        // function activate() {
        //     var authData = localStorageService.get('authorizationData');
        //     if (authData) {
        //         vm.name = authData.username;
        //         vm.firstName = authData.firstname;
        //         vm.lastName = authData.lastname;
        //         populateFeed();
        //     } else {
        //         $state.go('login');
        //     }
        // }

        // function activateToDos() {
        //     ToDoListFactory.getToDos().then(
        //         function(response) {
        //             vm.ToDoLocal = response.data;
        //         },
        //         function(error) {
        //             $log.error(error);
        //         })
        // };

        // activateToDos();


        // Populate Chirp Feed from Database upon opening the app
        // function populateFeed() {
        //     ChirperFactory.getChirps().then(
        //         function(response) {
        //             vm.Chirps = response.data;
        //             console.log(vm.Chirps);
        //         },
        //         function(error) {
        //             $log.error(error);
        //         })
        // };

        // function to Add new ToDo List object to the Database
        // vm.addToDo = function(num) {

        //     vm.ToDo.DisplayName = vm.name;
        //     vm.ToDo.FirstName = vm.firstName;
        //     vm.ToDo.LastName = vm.lastName;
        //     vm.ToDo.Completed = false;
        //     vm.ToDo.Priority = num;

        //     //add new ToDo to local array
        //     var data = vm.ToDo;

        //post new ToDo to the Database
        // ToDoListFactory.postToDos(data).then(
        //     function(response) {
        //         console.log("Success!");
        //         vm.ToDoLocal.push(response.data);
        //     },
        //     function(error) {
        //         $log.error(error);
        //     });

        //clear and hide entry form
        //     vm.ToDo = "";
        //     vm.editToDo = false;
        // };

        vm.Chirps = [{
            "FirstName": "John",
            "LastName": "Doe",
            "DisplayName": "jdoe88",
            "Text": "To get back, press the Chirp button in the top right corner of the screen!"
        }, {
            "FirstName": "John",
            "LastName": "Doe",
            "DisplayName": "jdoe88",
            "Text": "I began to replicate Twitter as closely as possible for this project."
        }]




        //function to Add new ToDo List object to the Database
        vm.addChirp = function() {
            // vm.Post.DisplayName = vm.name;
            // vm.Post.FirstName = vm.firstName;
            // vm.Post.LastName = vm.lastName;
            // var data = vm.Post;

            //post new ToDo to the Database
            // ChirperFactory.postChirp(data).then(
            //     function(response) {
            //         console.log("Success!");
            //         populateFeed();
            //     },
            //     function(error) {
            //         $log.error(error);
            //     });
            var data = {
                "FirstName": "John",
                "LastName": "Doe",
                "DisplayName": "jdoe88",
                "Text": vm.Post.Text
            }

            vm.Chirps.push(data);
            //clear and hide entry form
            // vm.Post = "";
            // vm.edit = false;

        };




        //delete an item from the list local and on database
        vm.deleteChirp = function(id) {

            ChirperFactory.deleteChirp(id).then(
                function(response) {
                    console.log("Deleted successfully!");
                    populateFeed();
                },
                function(error) {
                    $log.error(error);
                });

        }

        //function to Add new ToDo List object to the Database
        vm.addComment = function(id) {

            vm.Comment.DisplayName = vm.name;
            vm.Comment.FirstName = vm.firstName;
            vm.Comment.LastName = vm.lastName;
            vm.Comment.PostId = id;

            var data = vm.Comment;
            console.log(data);

            //post new ToDo to the Database
            ChirperFactory.postComment(data).then(
                function(response) {
                    console.log("Success!");
                    populateFeed();
                },
                function(error) {
                    $log.error(error);
                });

            //clear and hide entry form
            vm.Comment = "";

        };


        vm.deleteComment = function(id) {

            ChirperFactory.deleteComment(id).then(
                function(response) {
                    console.log("Deleted successfully!");
                    populateFeed();
                },
                function(error) {
                    $log.error(error);
                });

        }




        //function to update an item in the database that you have "completed"
        vm.update = function(id, data) {

            data.Completed = !data.Completed;
            console.log(data);

            ToDoListFactory.putToDos(id, data).then(
                function(response) {
                    console.log("Updated successfully!");
                },
                function(error) {
                    $log.error(error);
                });

        }

        //function to update an item in the database that you have "completed"
        vm.updateToDo = function(id, data) {

            data.Completed = !data.Completed;
            console.log(data);

            ToDoListFactory.putToDos(id, data).then(
                function(response) {
                    console.log("Updated successfully!");
                },
                function(error) {
                    $log.error(error);
                });

        }

        //delete an item from the list local and on database
        vm.deleteToDo = function(id, index) {

            vm.ToDoLocal.splice(index, 1);

            ToDoListFactory.deleteToDos(id).then(
                function(response) {
                    console.log("Deleted successfully!");
                },
                function(error) {
                    $log.error(error);
                });

        }




    };

})();
