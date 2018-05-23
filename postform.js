"use strict";

const postForm = {
// bindings: {
//   addThought: "&"
// },

template: `
 <div>
 <thoughts> {{$ctrl.thoughts}} </thoughts>
 </div>
`,

controller: function () {
    const vm = this;
    vm.thoughts = [
        "Lorem ipsum",
        "Dear diary",
        "So I was like"
    ];

}

};

angular
  .module("socialModule")
  .component("postForm", postForm)