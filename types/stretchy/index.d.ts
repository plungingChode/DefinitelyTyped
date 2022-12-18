// Type definitions for stretchy 2.0
// Project: https://github.com/leaverou/stretchy
// Definitions by: Szigeti Peter <https://github.com/plungingChode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Resize controls inside a given element, and monitor for changes. `root` can be
 * any {@linkcode Node}, including Shadow roots.
 */
export function init(): void;
export function init(root: Node): void;

/**
 * Autosize one element based on its content. Note that this does not set up
 * any event listeners, it just calculates and sets the right dimension (width
 * or height, depending on the type of control) once.
 *
 * @param element the element to resize
 */
export function resize(element: Element): void;

/**
 * Can Stretchy be used on this particular element? (checks if element is in
 * the DOM, if it's of the right type and if it matches the selector filter
 * provided by data-stretchy-selector, if the attribute is set.)
 *
 * @param element the element to check
 */
export function resizes(element: Element): boolean;

/**
 * Apply {@linkcode resize} to a collection of elements, or all Stretchy is
 * set to apply to, if no argument is provided.
 */
export function resizeAll(): void;
export function resizeAll(element: Element, root?: Node): void;
export function resizeAll(elements: Element[], root?: Node): void;
export function resizeAll(selector: string, root?: Node): void;

export const selectors: {
    /**
     * CSS selector to tell Stretchy which elements can be resized. Defaults to
     * input, select, textarea. Main use case for modifying this is in case you
     * have a custom element that behaves like these and want Stretchy to stop
     * ignoring it. If you just want to filter which elements Stetchy resizes,
     * use filter below.
     */
    base: string;
    /**
     * CSS selector that elements need to match to be resized.
     */
    filter: string;
};

/**
 * Set to `false` to temporarily disable Stretchy globally.
 */
export let active: boolean;
