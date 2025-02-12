<script>
import AdDatepicker from '../lib/components/datepicker/datepicker2.vue'
import AdTextfield from '../lib/components/textfield/textfield.vue'
import AdModal from '../lib/components/modal/modal.vue'

export default {
  components: { AdDatepicker, AdTextfield, AdModal },
  data() {
    return {
      form: {
        companyName: "",
        email: "",
        orgNumber: "",
        additionalInfo: "",
        fromDate: "",
        toDate: "",
      },
      errors: {
        companyName: null,
        email: null,
        orgNumber: null,
      },

      modalIsOpen: false,
    };
  },
  methods: {
    validateForm() {
      const errors = {
        companyName: null,
        email: null,
        orgNumber: null,
      };

      // Validate companyName
      if (!this.form.companyName) {
        errors.companyName = "Företagsnamn är obligatoriskt.";
      }

      // Validate email
      if (!this.form.email) {
        errors.email = "E-post är obligatoriskt.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        errors.email = "Ange en giltig e-postadress.";
      }

      // Validate organization number
      if (!this.form.orgNumber) {
        errors.orgNumber = "Organisationsnummer är obligatoriskt.";
      } else if (!/^\d+$/.test(this.form.orgNumber)) {
        errors.orgNumber = "Organisationsnummer måste endast innehålla siffror.";
      }

      this.errors = errors;

      // Return true if no errors, false otherwise
      return !Object.values(errors).some((error) => error !== null);
    },
    handleSubmit() {
      if (this.validateForm()) {
        // Form is valid, proceed with submission
        alert("Form submitted successfully!");
        console.log(this.form);
      }
    },
    handleClose() {
      // Logic for closing the form
      alert("Form closed.");
    },

    emittedData(value) {
      this.modalIsOpen = value;
    }
  },
};
</script>


<template>
  <!-- <button @click="modalIsOpen = !modalIsOpen">Open modal</button>
  <AdModal 
    v-if="modalIsOpen"
    @isClosing="modalIsOpen = value"
    heading="My modal heading">
    <template #default>
      <p>Ut fringilla leo in lorem condimentum laoreet. Duis vestibulum, enim eget lobortis sagittis, ipsum tortor tempor diam, sit amet posuere enim orci non metus.</p>
    </template>
  </AdModal> -->

  <AdModal 
    v-if="modalIsOpen"
    @isClosing="emittedData"
    :stickyFooter="true"
    :stickyHeader="true"
    :desktopPadding="'0 40px'"
    >
    <template #default>
        <div style="margin: auto; height: 500px;  width: 100%; display:flex; flex-direction: column; gap:0px;" >

      <form @submit.prevent="handleSubmit" style="display:flex; flex-direction: column; gap: 28px; margin: 24px 0 16px 0;" v-if="false">
        
        <p style="line-height: 150%; margin: 0;">Vi är glada över att du visar intresse för finansiering av dina produkter. När vi får in din intresseanmälan, kommer du inom kort att bli kontaktad av Atea Finance för att titta vidare på hur den bästa finansieringslösningen kan se ut för er.</p>
      <p style="line-height: 150%; margin: 0;">Vi är glada över att du visar intresse för finansiering av dina produkter. När vi får in din intresseanmälan, kommer du inom kort att bli kontaktad av Atea Finance för att titta vidare på hur den bästa finansieringslösningen kan se ut för er.</p>
      <p style="line-height: 150%; margin: 0;">Vi är glada över att du visar intresse för finansiering av dina produkter. När vi får in din intresseanmälan, kommer du inom kort att bli kontaktad av Atea Finance för att titta vidare på hur den bästa finansieringslösningen kan se ut för er.</p>
      <p style="line-height: 150%;">Är din förfrågan mer allmän, eller du redan nu vet vilka specifka behov ni har, skriver du detta i kommentarsfältet nedan. Då kan våra specialister förbereda sig innan de kontaktar dig. Annars bifogas produkterna du har i kundvagnen med din ansökan.</p>
      <p style="line-height: 150%; margin: 0;">Genom att skicka in din förfrågan till oss accepterar du att Atea Finance genomför en sedvanlig kreditbedömning.</p>
      <p style="line-height: 150%; margin: 0;">Genom att skicka in din förfrågan till oss accepterar du att Atea Finance genomför en sedvanlig kreditbedömning.</p>
      <p style="line-height: 150%; margin: 0;">Genom att skicka in din förfrågan till oss accepterar du att Atea Finance genomför en sedvanlig kreditbedömning.</p>

        <AdTextfield :isRequired="true" width="100%" :isValid="true" :errorMessage="''" :description="'Example: Atea Sverige'" :infoText="'Företagsnamn, notera att Atea inte tillåter finansiering till privatpersoner'">Företagsnamn</AdTextfield>
        <AdTextfield :isRequired="true" width="100%" :isValid="true" :errorMessage="''" :description="'Example: mail@atea.se'" :infoText="'Atea Finance kommer att kontakta den angivna e-postadressen'">E-post</AdTextfield>
        <AdTextfield :isRequired="true" width="100%" :isValid="true" :errorMessage="''" :description="'Example: 12343456'" :infoText="'Organisationsnummer är obligatoriskt vid ansökningen.'">Organisationsnummer</AdTextfield>
        
        <br>
        

        </form>

      </div> 
    </template>

  <!-- <template #footer><div style="display:flex; width: 100%; justify-content: space-between;"><button @click="modalIsOpen = false" type="submit">Close</button><button type="submit">Submit</button></div>
    </template>  -->
  </AdModal>


  <!-- <button @click="modalIsOpen = !modalIsOpen">Open modal</button>
  <button @click="modalIsOpen = !modalIsOpen">Open modal</button>
  <button @click="modalIsOpen = !modalIsOpen">Open modal</button> -->
  <div style="width: 100vw; height: 100svh;" @click="modalIsOpen = !modalIsOpen"></div> 
</template>


<!-- <template> -->
<!--   
<div style="width: 100vw; height: 100vh; display:flex; flex-direction: column; align-items: center; gap:32px; padding-top: 30vh">
  
  <h2>Textfields</h2>
  <AdTextfield width="650px" icon="ic_soundwave" description="My description" setLanguage="sv" :isValid="true" :isLoading="false" :infoText="'Företagsnamn, notera att Atea inte tillåter finansiering till privatpersoner'">My Textfield</AdTextfield>
  <AdTextfield width="650px" icon="ic_soundwave" description="Phasellus lobortis pulvinar magna sed malesuada. Mauris ut porta dolor. Suspendisse potenti. Sed bibendum pellentesque maximus." setLanguage="sv" :isValid="true" :isLoading="true" :infoText="'Phasellus lobortis pulvinar magna sed malesuada. Mauris ut porta dolor. Suspendisse potenti. Sed bibendum pellentesque maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae'">My Textfield</AdTextfield>

  <h2>Datepickers</h2>
    <AdDatepicker :isRequired="true" width="650px" label="Datepicker" :isLoading="true"
    format="dd/mm/yyyy"  errorMessage="My new errorMessage" infoText="Företagsnamn, notera att Atea inte tillåter finansiering till privatpersoner"></AdDatepicker>

    <AdDatepicker :isRequired="true" width="650px" label="Datepicker" description="My description"
    format="dd/mm/yyyy" :isValid="notValid" :infoText="'Företagsnamn, notera att Atea inte tillåter finansiering till privatpersoner'"></AdDatepicker>


    <AdDatepicker :isRequired="true" setLanguage="sv" width="650px" :isLoading="true" label="Read only" description="My description"
    format="dd/mm/yyyy" :infoText="'Företagsnamn, notera att Atea inte tillåter finansiering till privatpersoner'"
    v-model="date" :isReadonly="true"></AdDatepicker>


    <button @click="notValid = !notValid">Toggle valid</button>
  </div> -->

<!-- <div style="margin: auto;   width: 600px; display:flex; flex-direction: column; gap:0px; padding: 10vh 0">

  <p style="line-height: 150%; margin: 0;">Vi är glada över att du visar intresse för finansiering av dina produkter. När vi får in din intresseanmälan, kommer du inom kort att bli kontaktad av Atea Finance för att titta vidare på hur den bästa finansieringslösningen kan se ut för er.</p>
  <p style="line-height: 150%;">Är din förfrågan mer allmän, eller du redan nu vet vilka specifka behov ni har, skriver du detta i kommentarsfältet nedan. Då kan våra specialister förbereda sig innan de kontaktar dig. Annars bifogas produkterna du har i kundvagnen med din ansökan.</p>
  <p style="line-height: 150%; margin: 0;">Genom att skicka in din förfrågan till oss accepterar du att Atea Finance genomför en sedvanlig kreditbedömning.</p>

  <form @submit.prevent="handleSubmit" style="display:flex; flex-direction: column; gap: 28px; margin: 24px 0 16px 0;">
    
    <AdTextfield :isRequired="true" width="100%" :isValid="true" :errorMessage="''" :description="'Example: Atea Sverige'" :infoText="'Företagsnamn, notera att Atea inte tillåter finansiering till privatpersoner'">Företagsnamn</AdTextfield>
    <AdTextfield :isRequired="true" width="100%" :isValid="true" :errorMessage="''" :description="'Example: mail@atea.se'" :infoText="'Atea Finance kommer att kontakta den angivna e-postadressen'">E-post</AdTextfield>
    <AdTextfield :isRequired="true" width="100%" :isValid="true" :errorMessage="''" :description="'Example: 12343456'" :infoText="'Organisationsnummer är obligatoriskt vid ansökningen.'">Organisationsnummer</AdTextfield>
    
    <br>
    
    <AdTextfield width="100%">Information till ansökningen</AdTextfield>
    <div style="display: flex; gap: 28px;">
      <AdDatepicker width="100%" label="From" format="dd/mm/yyyy"></AdDatepicker>
      <AdDatepicker width="100%" label="To" format="dd/mm/yyyy"></AdDatepicker>
    </div>

      <div style="display:flex; justify-content: space-between;"><button type="submit">Close</button><button type="submit">Submit</button></div>
    </form>
  </div> 

</template> -->

<style>

body {
  min-height: 200vh;
}

</style>


