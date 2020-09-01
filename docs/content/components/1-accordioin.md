---
title: "Accordions"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---

Accordion
=========

Toggle the visibility of content across your project with a few classes and our jquery codes. [for more ...](https://v5.getbootstrap.com/docs/5.0/components/collapse/#accordion-example)

### Accordion example

Using the card component, you can extend the default collapse behavior to create an accordion. To properly achieve the accordion style, be sure to use `.accordion` as a wrapper.



###### Basic Usage accordion

*   [Result](#fx-result-1)

<div class="accordion" id="accordionExample1">
  <div class="card">
    <div class="card-header" id="headingOne">
      <div class="card-title" data-toggle="collapse" data-target="#collapseOne1"
      aria-expanded="true" aria-controls="collapseOne1">
      What does royalty free mean?
      </div>
    </div>
    <div id="collapseOne1" class="collapse show" aria-labelledby="headingOne"
    data-parent="#accordionExample1">
      <div class="card-body">
      1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem distinctio
      dolorem, aperiam ea esse consectetur minus quas laudantium. Saepe pariatur voluptates
      omnis labore excepturi eius officia neque, assumenda non temporibus.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <div class="card-title collapsed" data-toggle="collapse" data-target="#collapseTwo1"
      aria-expanded="false" aria-controls="collapseTwo1">
      What do you mean by item and end product?
      </div>
    </div>
    <div id="collapseTwo1" class="collapse" aria-labelledby="headingTwo1"
    data-parent="#accordionExample1">
      <div class="card-body">
      2 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis dolorem officia
      excepturi suscipit fugiat sint totam odio veniam accusantium dicta cupiditate fuga omnis,
      sapiente amet laboriosam eveniet! Omnis, ullam necessitatibus?
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <div class="card-title collapsed" data-toggle="collapse" data-target="#collapseThree1"
      aria-expanded="false" aria-controls="collapseThree1">
      What do you mean by item and end product 3?
      </div>
    </div>
    <div id="collapseThree1" class="collapse" aria-labelledby="headingThree1"
    data-parent="#accordionExample1">
      <div class="card-body">
      2 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis dolorem officia
      excepturi suscipit fugiat sint totam odio veniam accusantium dicta cupiditate fuga omnis,
      sapiente amet laboriosam eveniet! Omnis, ullam necessitatibus?
      </div>
    </div>
  </div>
</div>


*   [HTML CODE](#fx-html-1)

```html
<div class="accordion" id="accordionExample1">
  <div class="card">
    <div class="card-header" id="headingOne">
      <div class="card-title" data-toggle="collapse" data-target="#collapseOne1"
      aria-expanded="true" aria-controls="collapseOne1">
      What does royalty free mean?
      </div>
    </div>
    <div id="collapseOne1" class="collapse show" aria-labelledby="headingOne"
    data-parent="#accordionExample1">
      <div class="card-body">
      1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem distinctio
      dolorem, aperiam ea esse consectetur minus quas laudantium. Saepe pariatur voluptates
      omnis labore excepturi eius officia neque, assumenda non temporibus.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <div class="card-title collapsed" data-toggle="collapse" data-target="#collapseTwo1"
      aria-expanded="false" aria-controls="collapseTwo1">
      What do you mean by item and end product?
      </div>
    </div>
    <div id="collapseTwo1" class="collapse" aria-labelledby="headingTwo1"
    data-parent="#accordionExample1">
      <div class="card-body">
      2 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis dolorem officia
      excepturi suscipit fugiat sint totam odio veniam accusantium dicta cupiditate fuga omnis,
      sapiente amet laboriosam eveniet! Omnis, ullam necessitatibus?
      </div>
    </div>
  </div>
  ...
</div>
```

### Accordion Outline

<div class="accordion accordion-outline" id="accordionExample1-1">
  <div class="card">
    <div class="card-header" id="headingOne1-1">
      <div class="card-title" data-toggle="collapse" data-target="#collapseOne1-1"
        aria-expanded="true" aria-controls="collapseOne1-1">
        What does royalty free mean?
      </div>
    </div>
    <div id="collapseOne1-1" class="collapse show" aria-labelledby="headingOne1-1"
      data-parent="#accordionExample1-1">
      <div class="card-body">
        1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem distinctio
        dolorem, aperiam ea esse consectetur minus quas laudantium. Saepe pariatur voluptates
        omnis labore excepturi eius officia neque, assumenda non temporibus.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo1-1">
      <div class="card-title collapsed" data-toggle="collapse" data-target="#collapseTwo1-1"
        aria-expanded="false" aria-controls="collapseTwo1-1">
        What do you mean by item and end product?
      </div>
    </div>
    <div id="collapseTwo1-1" class="collapse" aria-labelledby="headingTwo1-1"
      data-parent="#accordionExample1-1">
      <div class="card-body">
        2 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis dolorem officia
        excepturi suscipit fugiat sint totam odio veniam accusantium dicta cupiditate fuga omnis,
        sapiente amet laboriosam eveniet! Omnis, ullam necessitatibus?
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree1-1">
      <div class="card-title collapsed" data-toggle="collapse" data-target="#collapseThree1-1"
      aria-expanded="false" aria-controls="collapseThree1-1">
      What do you mean by item and end product 3?
      </div>
    </div>
    <div id="collapseThree1-1" class="collapse" aria-labelledby="headingThree1-1"
    data-parent="#accordionExample1-1">
      <div class="card-body">
      2 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis dolorem officia
      excepturi suscipit fugiat sint totam odio veniam accusantium dicta cupiditate fuga omnis,
      sapiente amet laboriosam eveniet! Omnis, ullam necessitatibus?
      </div>
    </div>
  </div>
</div>

```html
<div class="accordion accordion-outline" id="accordionExample1-1">
<div class="card">
  <div class="card-header" id="headingOne1-1">
    <div class="card-title" data-toggle="collapse" data-target="#collapseOne1-1"
      aria-expanded="true" aria-controls="collapseOne1-1">
      <i class="" width="18" height="18" data-feather="bar-chart"></i>
      What does royalty free mean?
    </div>
  </div>
  <div id="collapseOne1-1" class="collapse show" aria-labelledby="headingOne1-1"
    data-parent="#accordionExample1-1">
    <div class="card-body">
      1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem distinctio
      dolorem, aperiam ea esse consectetur minus quas laudantium. Saepe pariatur voluptates
      omnis labore excepturi eius officia neque, assumenda non temporibus.
    </div>
  </div>
</div>
<div class="card">
  <div class="card-header" id="headingTwo1-1">
    <div class="card-title collapsed" data-toggle="collapse" data-target="#collapseTwo1-1"
      aria-expanded="false" aria-controls="collapseTwo1-1">
      <i class="" width="18" height="18" data-feather="bar-chart-2"></i>
      What do you mean by item and end product?
    </div>
  </div>
  <div id="collapseTwo1-1" class="collapse" aria-labelledby="headingTwo1-1"
    data-parent="#accordionExample1-1">
    <div class="card-body">
      2 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis dolorem officia
      excepturi suscipit fugiat sint totam odio veniam accusantium dicta cupiditate fuga omnis,
      sapiente amet laboriosam eveniet! Omnis, ullam necessitatibus?
    </div>
  </div>
</div>
...
</div>
```

### Accordion Light Style

Basic Usage `accordion accordion-light`

*   [Result](#fx-result-3)
*   [HTML](#fx-html-3)

<div class="accordion accordion-light" id="accordionExample1-2">
  <div class="card">
    <div class="card-header" id="headingOne1-2">
      <div class="card-title" data-toggle="collapse" data-target="#collapseOne1-2"
        aria-expanded="true" aria-controls="collapseOne1-2">
        1 - What does royalty free mean?
      </div>
    </div>
    <div id="collapseOne1-2" class="collapse show" aria-labelledby="headingOne1-2"
      data-parent="#accordionExample1-2">
      <div class="card-body">
        1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem distinctio
        dolorem, aperiam ea esse consectetur minus quas laudantium. Saepe pariatur voluptates
        omnis labore excepturi eius officia neque, assumenda non temporibus.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo1-2">
      <div class="card-title collapsed" data-toggle="collapse" data-target="#collapseTwo1-2"
        aria-expanded="false" aria-controls="collapseTwo1-2">
        2 - What do you mean by item and end product?
      </div>
    </div>
    <div id="collapseTwo1-2" class="collapse" aria-labelledby="headingTwo1-2"
      data-parent="#accordionExample1-2">
      <div class="card-body">
        2 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis dolorem officia
        excepturi suscipit fugiat sint totam odio veniam accusantium dicta cupiditate fuga omnis,
        sapiente amet laboriosam eveniet! Omnis, ullam necessitatibus?
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree1-2">
      <div class="card-title collapsed" data-toggle="collapse" data-target="#collapseThree1-2"
      aria-expanded="false" aria-controls="collapseThree1-2">
      3 - What do you mean by item and end product 3?
      </div>
    </div>
    <div id="collapseThree1-2" class="collapse" aria-labelledby="headingThree1-2"
    data-parent="#accordionExample1-2">
      <div class="card-body">
      2 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis dolorem officia
      excepturi suscipit fugiat sint totam odio veniam accusantium dicta cupiditate fuga omnis,
      sapiente amet laboriosam eveniet! Omnis, ullam necessitatibus?
      </div>
    </div>
  </div>
</div>


```html
<div class="accordion accordion-light" id="accordionExample1-2">
  <div class="card">
    <div class="card-header" id="headingOne1-2">
      <div class="card-title" data-toggle="collapse" data-target="#collapseOne1-2"
        aria-expanded="true" aria-controls="collapseOne1-2">
        What does royalty free mean?
      </div>
    </div>
    <div id="collapseOne1-2" class="collapse show" aria-labelledby="headingOne1-2"
      data-parent="#accordionExample1-2">
      <div class="card-body">
        1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem distinctio
        dolorem, aperiam ea esse consectetur minus quas laudantium. Saepe pariatur voluptates
        omnis labore excepturi eius officia neque, assumenda non temporibus.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo1-2">
      <div class="card-title collapsed" data-toggle="collapse" data-target="#collapseTwo1-2"
        aria-expanded="false" aria-controls="collapseTwo1-2">
        What do you mean by item and end product?
      </div>
    </div>
    <div id="collapseTwo1-2" class="collapse" aria-labelledby="headingTwo1-2"
      data-parent="#accordionExample1-2">
      <div class="card-body">
        2 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis dolorem officia
        excepturi suscipit fugiat sint totam odio veniam accusantium dicta cupiditate fuga omnis,
        sapiente amet laboriosam eveniet! Omnis, ullam necessitatibus?
      </div>
    </div>
  </div>
  ...
</div>

```
