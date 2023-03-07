import React, { Component } from 'react'

export class Accor extends Component {
  render() {
    return (
      <div>
<div class="d-flex flex-column accordion align-items-center justify-content-center vh-80" id="accordionExample" >
  <div class="accordion-item" style={{width :"25%"}}    >
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What is an IP Address?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>An Internet Protocol (IP) address is the unique number that gets assigned to your connected device. Every mobile phone, laptop, cable box, tablet, server along with thousands of other types of devices (IoT) that are connected to a computer network has one.</p>
        
      </div>
    </div>
  </div>
  <div class="accordion-item" style={{width :"25%"}}>
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What is IP Geolocation?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>IP geolocation is the science of determining the physical location and Internet connection characteristics of a web visitor. Much like how a street address identifies where you live, an IP address functions as the identifying "street address" of the device and allows companies to see where the device is located and route traffic to the nearest server for faster connections and lower latency. No Personally Identifiable Information (PII) is required, and our data is fully compliant with all privacy mandates including GDPR and CCPA.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item" style={{width :"25%"}}>
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Does it support IPv6 location lookups?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Yes, IPv6 geoloaction is supported as well. Just enter a valid address above to perform the IPv6 lookup.</p>
      </div>
    </div>
  </div>
</div>
      </div>
    )
  }
}

export default Accor