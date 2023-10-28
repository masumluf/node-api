import {RouteResponse} from '../../utils/index.js';

export class HealthApiClass {
  constructor() {
    this.routeResponse = new RouteResponse();
  }
  healthHandler(res) {
    return this.routeResponse.applicationHealth(res);
  }
}
