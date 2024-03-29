import { Component, OnInit, ElementRef } from "@angular/core";

@Component({
  selector: "app-adherent",
  templateUrl: "./adherent.component.html",
  styleUrls: ["./adherent.component.scss"]
})
export class AdherentComponent implements OnInit {
  constructor(private readonly elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement
      .querySelector(".gform")
      .addEventListener("submit", handleFormSubmit, false);
  }
}

function validEmail(email: string) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

// get all data in form and return object
function getFormData(form: HTMLFormElement) {
  var elements = form.elements;

  var fields = Object.keys(elements)
    .filter(function(k) {
      return elements[k].name !== "honeypot";
    })
    .map(function(k) {
      if (elements[k].name !== undefined) {
        return elements[k].name;
        // special case for Edge's html collection
      } else if (elements[k].length > 0) {
        return elements[k].item(0).name;
      }
    })
    .filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

  var formData: { [id: string]: string } = {};
  fields.forEach(function(name: string) {
    var element = elements[name];

    // singular form elements just have one value
    formData[name] = element.value;

    // when our element has multiple items, get their values
    if (element.length) {
      var data = [];
      for (var i = 0; i < element.length; i++) {
        var item = element.item(i);
        if (item.checked || item.selected) {
          data.push(item.value);
        }
      }
      formData[name] = data.join(", ");
    }
  });

  // add form-specific values into the data
  formData.formDataNameOrder = JSON.stringify(fields);
  formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
  formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

  console.log(formData);
  return formData;
}

function handleFormSubmit(event: Event) {
  // handles form submit without any jquery
  event.preventDefault(); // we are submitting via xhr below
  var form = event.target as HTMLFormElement;
  var data = getFormData(form); // get the values submitted in the form

  if (data.email && !validEmail(data.email)) {
    // if email is not valid show error
    var invalidEmail = form.querySelector(".email-invalid") as any;
    if (invalidEmail) {
      invalidEmail.style.display = "block";
      return false;
    }
  } else {
    disableAllButtons(form);
    var url = form.action;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      console.log(xhr.status, xhr.statusText);
      console.log(xhr.responseText);
      var formElements = form.querySelector(".form-elements") as any;
      if (formElements) {
        formElements.style.display = "none"; // hide form
      }
      var thankYouMessage = form.querySelector(".thankyou_message") as any;
      if (thankYouMessage) {
        thankYouMessage.style.display = "block";
      }
      return;
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data)
      .map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      })
      .join("&");
    xhr.send(encoded);
  }
}

function loaded() {
  console.log("Contact form submission handler loaded successfully.");
  // bind to the submit event of our form
  var forms = document.querySelectorAll("form.gform");
  for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener("submit", handleFormSubmit, false);
  }
}
document.addEventListener("DOMContentLoaded", loaded, false);

function disableAllButtons(form: HTMLFormElement) {
  var buttons = form.querySelectorAll("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}
