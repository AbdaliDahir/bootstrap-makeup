---
title: "Alerts"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."
---

## Examples

Alerts are available for any length of text, as well as an optional close button. For proper styling, use one of the eight **required** contextual classes (e.g., `.alert-success`). For inline dismissal, use the [alerts JavaScript plugin](#dismissing).

<div class="alert alert-primary" role="alert">
  This is a primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  This is a secondary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  This is a success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  This is a warning alert—check it out!
</div>
<div class="alert alert-info" role="alert">
  This is a info alert—check it out!
</div>
<div class="alert alert-light" role="alert">
  This is a light alert—check it out!
</div>
<div class="alert alert-dark" role="alert">
  This is a dark alert—check it out!
</div>

```html
<div class="alert alert-primary" role="alert">
  This is a primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  This is a secondary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  This is a success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  This is a warning alert—check it out!
</div>
<div class="alert alert-info" role="alert">
  This is a info alert—check it out!
</div>
<div class="alert alert-light" role="alert">
  This is a light alert—check it out!
</div>
<div class="alert alert-dark" role="alert">
  This is a dark alert—check it out!
</div>
```

### Link color

Use the `.alert-link` utility class to quickly provide matching colored links within any alert.


### Additional content

Alerts can also contain additional HTML elements like headings, paragraphs and dividers.


### Dismissing

Using the alert JavaScript plugin, it's possible to dismiss any alert inline. Here's how:

- Be sure you've loaded the alert plugin, or the compiled Bootstrap JavaScript.
- Add a and the `.alert-dismissible` class, which adds extra padding to the right of the alert and positions the close button.
- On the close button, add the `data-dismiss="alert"` attribute, which triggers the JavaScript functionality. Be sure to use the `<button>` element with it for proper behavior across all devices.
- To animate alerts when dismissing them, be sure to add the `.fade` and `.show` classes.

You can see this in action with a live demo:


When an alert is dismissed, the element is completely removed from the page structure. If a keyboard user dismisses the alert using the close button, their focus will suddenly be lost and, depending on the browser, reset to the start of the page/document. For this reason, we recommend including additional JavaScript that listens for the `closed.bs.alert` event and programmatically sets `focus()` to the most appropriate location in the page. If you're planning to move focus to a non-interactive element that normally does not receive focus, make sure to add `tabindex="-1"` to the element.


## JavaScript behavior

### Triggers

Enable dismissal of an alert via JavaScript:

```javascript
var alertList = document.querySelectorAll('.alert')
alertList.forEach(function (alert) {
  new bootstrap.Alert(alert)
})
```

Or with `data` attributes on a button **within the alert**, as demonstrated above:


Note that closing an alert will remove it from the DOM.

### Methods

You can create an alert instance with the alert constructor, for example:

```javascript
var myAlert = document.getElementById('myAlert')
var bsAlert = new bootstrap.Alert(myAlert)
```

This makes an alert listen for click events on descendant elements which have the `data-dismiss="alert"` attribute. (Not necessary when using the data-api's auto-initialization.)

<table class="table">
  <thead>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>close</code>
      </td>
      <td>
        Closes an alert by removing it from the DOM. If the <code>.fade</code> and <code>.show</code> classes are present on the element, the alert will fade out before it is removed.
      </td>
    </tr>
    <tr>
      <td>
        <code>dispose</code>
      </td>
      <td>
        Destroys an element's alert.
      </td>
    </tr>
    <tr>
      <td>
        <code>getInstance</code>
      </td>
      <td>
        Static method which allows you to get the alert instance associated to a DOM element, you can use it like this: <code>bootstrap.Alert.getInstance(alert)</code>
      </td>
    </tr>
  </tbody>
</table>



### Events

Bootstrap's alert plugin exposes a few events for hooking into alert functionality.

<table class="table">
  <thead>
    <tr>
      <th>Event</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>close.bs.alert</code></td>
      <td>
        Fires immediately when the <code>close</code> instance method is called.
      </td>
    </tr>
    <tr>
      <td><code>closed.bs.alert</code></td>
      <td>
        Fired when the alert has been closed and CSS transitions have completed.
      </td>
    </tr>
  </tbody>
</table>

