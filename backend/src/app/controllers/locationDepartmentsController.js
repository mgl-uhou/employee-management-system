import Controller from "./controller.js";

export const locationDepartmentsController = new Controller('location_departments', [ "locationId", "departmentId", "minCapacity", "maxCapacity" ]);
