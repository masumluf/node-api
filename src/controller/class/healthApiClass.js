import { RouteResponse } from "../../utils/index.js";
import { default as t } from "../../constants";

export class HealthApiClass {
  constructor(){
    this.routeResponse = new RouteResponse();
  }  
  healthHandler(res) {
    return this.routeResponse.applicationHealth(res);
  }
}
