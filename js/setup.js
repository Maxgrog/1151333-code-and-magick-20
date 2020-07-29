'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',
  'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var MAX_WIZARDS = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

var getRandomElement = function (array) {
  var index = Math.floor(Math.random() * array.length);

  return array[index];

};


var fragment = document.createDocumentFragment();

var prepareFragment = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.coatColor;
  fragment.appendChild(wizardElement);

};

var getWizard = function () {
  return {
    name: getRandomElement(WIZARD_NAMES),
    surname: getRandomElement(WIZARD_SURNAMES),
    coatColor: getRandomElement(WIZARD_COATS),
    eyesColor: getRandomElement(WIZARD_EYES)
  };
};

for (var i = 0; i < MAX_WIZARDS; i++) {
  var wizard = getWizard();
  prepareFragment(wizard);
}

similarListElement.appendChild(fragment);
