/**
 * @param {String} selector The element to be selected.
 * @return {Element} Returns the first element that is a descendant of node that matches selectors.
 */
export const q = (selector) => document.querySelector(selector);

/**
 * @param {String} selector The elements to be selected.
 * @return {NodeList} Returns all element descendants of node that match selectors.
 */
export const qAll = (selector) => document.querySelectorAll(selector);

/**
 * Creates an instance of the element for the specified tag.
 * @param {String} type The type of the element to create.
 * @return {Element} The created element
 */
export const create = (type) => document.createElement(type);
