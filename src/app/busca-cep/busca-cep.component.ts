import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { CEP } from '../model/cep';

@Component({
  selector: 'has-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.css']
})
export class BuscaCepComponent implements OnInit {
  cepForm : FormGroup;
  cep : CEP;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cepForm = this.formBuilder.group({
      cep: this.formBuilder.control('')


})

}

  onConsultar(){
    let cep : string = this.cepForm.value.cep;
    alert (cep);
}
}