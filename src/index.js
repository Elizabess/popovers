import Popover from './popover';
import './style.css';

const triggerElement = document.getElementById('popover-trigger');
new Popover(triggerElement, 'Popover Title', 'This is the content of the popover.');

