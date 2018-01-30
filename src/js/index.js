/**
 * @overview Fozzie header JavaScript behaviour.
 *
 * @module f-header
 */

import ready from 'lite-ready';
import setupHeader from './accessibleHeader';


ready(() => {
    setupHeader();
});
