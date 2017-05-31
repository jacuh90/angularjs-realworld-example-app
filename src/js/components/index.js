import angular from 'angular';

let componentsModule = angular.module('app.components', []);

// Components (and directives)
import ListErrors from './list-errors.component';
componentsModule.component('listErrors', ListErrors);

import ShowAuthed from './show-authed.directive';
componentsModule.directive('showAuthed', ShowAuthed);

import FollowBtn from './buttons/follow-btn.component';
componentsModule.component('followBtn', FollowBtn);

export default componentsModule;
