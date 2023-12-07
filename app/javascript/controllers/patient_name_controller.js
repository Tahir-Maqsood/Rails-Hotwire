import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="patient-name"
export default class extends Controller {
  connect() {
    console.log("Hello I am Connected");
  }
}
