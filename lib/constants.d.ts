export declare type KeyValueMap = {
    [key: string]: any;
};
export declare type IssueSeverity = 'fatal' | 'error' | 'warning' | 'information';
export declare type IssueCode = 'invalid' | 'structure' | 'required' | 'value' | 'invariant' | 'security' | 'login' | 'unknown' | 'expired' | 'forbidden' | 'surpressed' | 'processing' | 'not-supported' | 'duplicate' | 'not-found' | 'too-long' | 'code-invalid' | 'extension' | 'too-costly' | 'business-rule' | 'conflict' | 'incomplete' | 'transient' | 'lock-error' | 'no-store' | 'exception' | 'timeout' | 'throttled' | 'informational';
/**
 * Type Operations
 * https://www.hl7.org/fhir/valueset-type-restful-interaction.html
 */
export declare type TypeOperation = 'create' | 'read' | 'vread' | 'update' | 'delete' | 'patch' | 'history-type' | 'history-instance' | 'search-type';
/**
 * System Operations
 * https://www.hl7.org/fhir/valueset-system-restful-interaction.html
 */
export declare type SystemOperation = 'transaction' | 'batch' | 'search-system' | 'history-system';
/**
 * The version of the fhir configuration being used
 */
export declare type ConfigVersion = 1.0;
/**
 * These are currently the only versions we support
 */
export declare type FhirVersion = '3.0.1' | '4.0.1';
export declare type R4Resource = STU3Resource | 'BiologicallyDerivedProduct' | 'BodyStructure' | 'CatalogEntry' | 'ChargeItemDefinition' | 'CoverageEligibilityRequest' | 'CoverageEligibilityResponse' | 'DeviceDefinition' | 'EffectEvidenceSynthesis' | 'EventDefinition' | 'Evidence' | 'EvidenceVariable' | 'ExampleScenario' | 'ImmunizationEvaluation' | 'InsurancePlan' | 'Invoice' | 'MedicationKnowledge' | 'MedicinalProduct' | 'MedicinalProductAuthorization' | 'MedicinalProductContraindication' | 'MedicinalProductIndication' | 'MedicinalProductIngredient' | 'MedicinalProductOperation' | 'MedicinalProductManufactured' | 'MedicinalProductPackaged' | 'MedicinalProductPharmaceutical' | 'MedicinalProductUndesirableEffect' | 'MolecularSequence' | 'ObservationDefinition' | 'OrganizationAffiliation' | 'ResearchDefinition' | 'ResearchElementDefinition' | 'RiskEvidenceSynthesis' | 'ServiceRequest' | 'SpecimenDefinition' | 'SubstancePolymer' | 'SubstanceProtein' | 'SubstanceReferenceInformation' | 'SubstanceSpecification' | 'SubstanceSourceMaterial' | 'TerminologyCapabilities' | 'VerificationResult';
export declare type STU3Resource = 'Account' | 'ActivityDefinition' | 'AdverseEvent' | 'AllergyIntolerance' | 'Appointment' | 'AppointmentResponse' | 'AuditEvent' | 'Basic' | 'Binary' | 'BodySite' | 'Bundle' | 'CapabilityStatement' | 'CarePlan' | 'CareTeam' | 'ChargeItem' | 'Claim' | 'ClaimResponse' | 'ClinicalImpression' | 'CodeSystem' | 'Communication' | 'CommunicationRequest' | 'CompartmentDefinition' | 'Composition' | 'ConceptMap' | 'Condition' | 'Consent' | 'Contract' | 'Coverage' | 'DataElement' | 'DetectedIssue' | 'Device' | 'DeviceComponent' | 'DeviceMetric' | 'DeviceRequest' | 'DeviceUseStatement' | 'DiagnosticReport' | 'DocumentManifest' | 'DocumentReference' | 'EligibilityRequest' | 'EligibilityResponse' | 'Encounter' | 'Endpoint' | 'EnrollmentRequest' | 'EnrollmentResponse' | 'EpisodeOfCare' | 'ExpansionProfile' | 'ExplanationOfBenefit' | 'FamilyMemberHistory' | 'Flag' | 'Goal' | 'GraphDefinition' | 'Group' | 'GuidanceResponse' | 'HealthcareService' | 'ImagingManifest' | 'ImagingStudy' | 'Immunization' | 'ImmunizationRecommendation' | 'ImplementationGuide' | 'Library' | 'Linkage' | 'List' | 'Location' | 'Measure' | 'MeasureReport' | 'Media' | 'Medication' | 'MedicationAdministration' | 'MedicationDispense' | 'MedicationRequest' | 'MedicationStatement' | 'MessageDefinition' | 'MessageHeader' | 'NamingSystem' | 'NutritionOrder' | 'Observation' | 'OperationDefinition' | 'OperationOutcome' | 'Organization' | 'Parameters' | 'Patient' | 'PaymentNotice' | 'PaymentReconciliation' | 'Person' | 'PlanDefinition' | 'Practitioner' | 'PractitionerRole' | 'Procedure' | 'ProcedureRequest' | 'ProcessRequest' | 'ProcessResponse' | 'Provenance' | 'Questionnaire' | 'QuestionnaireResponse' | 'ReferralRequest' | 'RelatedPerson' | 'RequestGroup' | 'ResearchStudy' | 'ResearchSubject' | 'RiskAssessment' | 'Schedule' | 'SearchParameter' | 'Sequence' | 'ServiceDefinition' | 'Slot' | 'Specimen' | 'StructureDefinition' | 'StructureMap' | 'Subscription' | 'Substance' | 'SupplyDelivery' | 'SupplyRequest' | 'Task' | 'TestScript' | 'TestReport' | 'ValueSet' | 'VisionPrescription';
export declare const BASE_R4_RESOURCES: R4Resource[];
export declare const BASE_STU3_RESOURCES: STU3Resource[];
export declare const R4_PATIENT_COMPARTMENT_RESOURCES: R4Resource[];
export declare const STU3_PATIENT_COMPARTMENT_RESOURCES: STU3Resource[];
