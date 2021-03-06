var deps = [
    'splunkjs/ready!',
    'underscore', 
    'backbone'
];

define(
  '<%= appname %>/models/<%= name %>', 
  deps, 
  function() { 'use strict';

  var _ = require('underscore');
  var Backbone = require('backbone');
  var mvc = require('splunkjs/ready!');

  var <%= _.capitalize(name) %> = Backbone.Model.extend({

  });

  return <%= _.capitalize(name) %>;
});