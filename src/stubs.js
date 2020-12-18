"use strict";
/*
 *  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.stubs = void 0;
var stubs;
(function (stubs) {
    stubs.bundle = {
        batch: function (request) {
            throw new Error('Method not implemented.');
        },
        transaction: function (request) {
            throw new Error('Method not implemented.');
        }
    };
    stubs.search = {
        typeSearch: function (request) {
            throw new Error('Method not implemented.');
        },
        globalSearch: function (request) {
            throw new Error('Method not implemented.');
        }
    };
    stubs.history = {
        instanceHistory: function (request) {
            throw new Error('Method not implemented.');
        },
        typeHistory: function (request) {
            throw new Error('Method not implemented.');
        },
        globalHistory: function (request) {
            throw new Error('Method not implemented.');
        }
    };
    stubs.passThroughAuthz = {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        verifyAccessToken: function (request) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, {}];
                });
            });
        },
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        isBundleRequestAuthorized: function (request) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/];
            }); });
        },
        authorizeAndFilterReadResponse: function (request) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, request.readResponse];
                });
            });
        },
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        isWriteRequestAuthorized: function (request) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/];
            }); });
        },
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        isAccessBulkDataJobAllowed: function (request) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/];
            }); });
        },
        getAllowedResourceTypesForOperation: function (request) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, [
                            'Account',
                            'ActivityDefinition',
                            'AdverseEvent',
                            'AllergyIntolerance',
                            'Appointment',
                            'AppointmentResponse',
                            'AuditEvent',
                            'Basic',
                            'Binary',
                            'BiologicallyDerivedProduct',
                            'BodyStructure',
                            'Bundle',
                            'CapabilityStatement',
                            'CarePlan',
                            'CareTeam',
                            'CatalogEntry',
                            'ChargeItem',
                            'ChargeItemDefinition',
                            'Claim',
                            'ClaimResponse',
                            'ClinicalImpression',
                            'CodeSystem',
                            'Communication',
                            'CommunicationRequest',
                            'CompartmentDefinition',
                            'Composition',
                            'ConceptMap',
                            'Condition',
                            'Consent',
                            'Contract',
                            'Coverage',
                            'CoverageEligibilityRequest',
                            'CoverageEligibilityResponse',
                            'DetectedIssue',
                            'Device',
                            'DeviceDefinition',
                            'DeviceMetric',
                            'DeviceRequest',
                            'DeviceUseStatement',
                            'DiagnosticReport',
                            'DocumentManifest',
                            'DocumentReference',
                            'EffectEvidenceSynthesis',
                            'Encounter',
                            'Endpoint',
                            'EnrollmentRequest',
                            'EnrollmentResponse',
                            'EpisodeOfCare',
                            'EventDefinition',
                            'Evidence',
                            'EvidenceVariable',
                            'ExampleScenario',
                            'ExplanationOfBenefit',
                            'FamilyMemberHistory',
                            'Flag',
                            'Goal',
                            'GraphDefinition',
                            'Group',
                            'GuidanceResponse',
                            'HealthcareService',
                            'ImagingStudy',
                            'Immunization',
                            'ImmunizationEvaluation',
                            'ImmunizationRecommendation',
                            'ImplementationGuide',
                            'InsurancePlan',
                            'Invoice',
                            'Library',
                            'Linkage',
                            'List',
                            'Location',
                            'Measure',
                            'MeasureReport',
                            'Media',
                            'Medication',
                            'MedicationAdministration',
                            'MedicationDispense',
                            'MedicationKnowledge',
                            'MedicationRequest',
                            'MedicationStatement',
                            'MedicinalProduct',
                            'MedicinalProductAuthorization',
                            'MedicinalProductContraindication',
                            'MedicinalProductIndication',
                            'MedicinalProductIngredient',
                            'MedicinalProductOperation',
                            'MedicinalProductManufactured',
                            'MedicinalProductPackaged',
                            'MedicinalProductPharmaceutical',
                            'MedicinalProductUndesirableEffect',
                            'MessageDefinition',
                            'MessageHeader',
                            'MolecularSequence',
                            'NamingSystem',
                            'NutritionOrder',
                            'Observation',
                            'ObservationDefinition',
                            'OperationDefinition',
                            'OperationOutcome',
                            'Organization',
                            'OrganizationAffiliation',
                            'Parameters',
                            'Patient',
                            'PaymentNotice',
                            'PaymentReconciliation',
                            'Person',
                            'PlanDefinition',
                            'Practitioner',
                            'PractitionerRole',
                            'Procedure',
                            'Provenance',
                            'Questionnaire',
                            'QuestionnaireResponse',
                            'RelatedPerson',
                            'RequestGroup',
                            'ResearchDefinition',
                            'ResearchElementDefinition',
                            'ResearchStudy',
                            'ResearchSubject',
                            'RiskAssessment',
                            'RiskEvidenceSynthesis',
                            'Schedule',
                            'SearchParameter',
                            'ServiceRequest',
                            'Slot',
                            'Specimen',
                            'SpecimenDefinition',
                            'StructureDefinition',
                            'StructureMap',
                            'Subscription',
                            'Substance',
                            'SubstancePolymer',
                            'SubstanceProtein',
                            'SubstanceReferenceInformation',
                            'SubstanceSpecification',
                            'SubstanceSourceMaterial',
                            'SupplyDelivery',
                            'SupplyRequest',
                            'Task',
                            'TerminologyCapabilities',
                            'TestReport',
                            'TestScript',
                            'ValueSet',
                            'VerificationResult',
                            'VisionPrescription',
                        ]];
                });
            });
        }
    };
    stubs.persistence = {
        updateCreateSupported: false,
        createResource: function (request) {
            throw new Error('Method not implemented.');
        },
        conditionalCreateResource: function (request, queryParams) {
            throw new Error('Method not implemented.');
        },
        updateResource: function (request) {
            throw new Error('Method not implemented.');
        },
        conditionalUpdateResource: function (request, queryParams) {
            throw new Error('Method not implemented.');
        },
        patchResource: function (request) {
            throw new Error('Method not implemented.');
        },
        conditionalPatchResource: function (request, queryParams) {
            throw new Error('Method not implemented.');
        },
        readResource: function (request) {
            throw new Error('Method not implemented.');
        },
        vReadResource: function (request) {
            throw new Error('Method not implemented.');
        },
        deleteResource: function (request) {
            throw new Error('Method not implemented.');
        },
        conditionalDeleteResource: function (request, queryParams) {
            throw new Error('Method not implemented.');
        }
    };
    stubs.bulkDataAccess = {
        initiateExport: function (request) {
            throw new Error('Method not implemented.');
        },
        cancelExport: function (jobId) {
            throw new Error('Method not implemented');
        },
        getExportStatus: function (jobId) {
            throw new Error('Method not implemented');
        }
    };
})(stubs = exports.stubs || (exports.stubs = {}));
