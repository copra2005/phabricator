/**
 * @provides javelin-behavior-error-log
 * @requires javelin-dom
 */

var current_details = null;

function open_file(file, row) {
  // Do some fun some here, e.g., open the diffusion page for the file
  // or open the file in an editor
}

function show_details(row) {
  var node = JX.$('row-details-' + row);

  if (current_details !== null) {
    JX.$('row-details-' + current_details).style.display = 'none';
  }

  node.style.display = 'block';
  current_details = row;
}
