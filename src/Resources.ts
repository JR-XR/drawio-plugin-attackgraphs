declare const __COMMIT_HASH__: string;
declare const __VERSION__: string;

export class Resources {
  static register(lang: string): void {
    switch (lang) {
      case 'de':
        this.registerDe();
        break;
      case 'en':
      default:
        this.registerEn();
        break;
    }
  }

  private static registerEn() {
    mxResources.parse(`
attackGraphs.activity=Attack Step
attackGraphs.control=Security Control
attackGraphs.orNode=OR
attackGraphs.andNode=AND
attackGraphs.addFurther=Add further
attackGraphs.addIconLegend=Add icon legend
attackGraphs.aggregationFunction=Aggregation Function
attackGraphs.aggregationFunctions=Aggregation Functions
attackGraphs.attackGraph=Attack Graph
attackGraphs.attackGraphs=Attack Graphs
attackGraphs.attackGraph_RKL=Attack Graph RKL
attackGraphs.attackGraph_TS50701=Attack Graph TS 50701
attackGraphs.attributeName=Attribute Name
attackGraphs.attributeValue=Value
attackGraphs.computedAttributeFunction=Computed Attribute
attackGraphs.computedAttributes=Computed Attributes
attackGraphs.consequence=Consequence
attackGraphs.defaultAttributes=Default Attributes
attackGraphs.defineAggregationFunction=Define Aggregation Function
attackGraphs.defineComputedAttributesFunction=Define Computed Attributes Function
attackGraphs.defaultFunction=Default Function
attackGraphs.invalidAttributeName=Invalid attribute name
attackGraphs.labelFunction=Label Function
attackGraphs.noItems=No items
attackGraphs.openAggregationFunctionsDialog=Aggregation Functions...
attackGraphs.openComputedAttributesDialog=Computed Attributes...
attackGraphs.openDefaultAttributesDialog=Default Attributes...
attackGraphs.pickIconForAttribute=Pick an Icon for
attackGraphs.propertyDefinedTwice=Property defined twice!
attackGraphs.none=None
attackGraphs.custom=Custom
attackGraphs.mustAssignMaxValue=You have to set the max value for
attackGraphs.setDefaultAttributes=Set default attributes for selection
attackGraphs.setAttackGraphShape=Set selection as attackgraph nodes
attackGraphs.showVersion=Version ${__VERSION__} (${__COMMIT_HASH__})
attackGraphs.enableSensitivityAnalysis=Enable Sensitivity Analysis
attackGraphs.applySensitivityAnalysis=Apply Sensitivity Analysis
attackGraphs.value=Value
attackGraphs.ok=OK
attackGraphs.cancel=Cancel
attackGraphs.yes=Yes
attackGraphs.no=No
attackGraphs.startAnalysisTitle=Start sensitivity analysis
attackGraphs.acceptAnalysisTitle=Accept analysis
attackGraphs.abortAnalysisTitle=Abort analysis
attackGraphs.acceptAnalysisDialog=Do you want to apply the current analysis to the graph?
attackGraphs.documentation=Documentation...
attackGraphs.pageReferenceTooltip=Referenced from
attackGraphs.workerStatus=Background workers in progress to update the attack graph! Please wait...
`);
  }

  private static registerDe() {
    mxResources.parse(`
attackGraphs.activity=Angriffsschritt
attackGraphs.control=Kontrollmaßnahme
attackGraphs.orNode=ODER
attackGraphs.andNode=UND
attackGraphs.addFurther=Weiteres hinzufügen
attackGraphs.addIconLegend=Icon-Legende hinzufügen
attackGraphs.aggregationFunction=Aggregierungsfunktion
attackGraphs.aggregationFunctions=Aggregierungsfunktionen
attackGraphs.attackGraph=Attack Graph
attackGraphs.attackGraphs=Attack Graphs
attackGraphs.attributeName=Attributname
attackGraphs.attributeValue=Wert
attackGraphs.computedAttributeFunction=Berechnetes Attribut
attackGraphs.computedAttributes=Berechnete Attribute
attackGraphs.consequence=Auswirkung
attackGraphs.defaultAttributes=Standardattribute
attackGraphs.defineAggregationFunction=Aggregationsfunktion definieren
attackGraphs.defineComputedAttributesFunction=Berechnetes Attribut definieren
attackGraphs.defaultFunction=Standard Funktion
attackGraphs.invalidAttributeName=Ungültiger Attributname
attackGraphs.labelFunction=Berechnetes Attribut
attackGraphs.noItems=Keine Einträge
attackGraphs.openAggregationFunctionsDialog=Aggregierungsfunktionen...
attackGraphs.openComputedAttributesDialog=Berechnete Attribute...
attackGraphs.openDefaultAttributesDialog=Standardattribute...
attackGraphs.pickIconForAttribute=Wähle ein Bild für
attackGraphs.propertyDefinedTwice=Doppeltes Attribut!
attackGraphs.none=Keine
attackGraphs.custom=Benutzerdefiniert
attackGraphs.mustAssignMaxValue=Sie müssen einen Maximalwert setzen für
attackGraphs.setDefaultAttributes=Setze Standardattribute für Auswahl
attackGraphs.setAttackGraphShape=Markiere Auswahl als Attack Graph Knoten
attackGraphs.showVersion=Version ${__VERSION__} (${__COMMIT_HASH__})
attackGraphs.enableSensitivityAnalysis=Sensitivitätsanalyse aktivieren
attackGraphs.applySensitivityAnalysis=Sensitivitätsanalyse anwenden
attackGraphs.value=Wert
attackGraphs.ok=OK
attackGraphs.cancel=Abbrechen
attackGraphs.yes=Ja
attackGraphs.no=Nein
attackGraphs.startAnalysisTitle=Sensitivitätsanalysis starten
attackGraphs.acceptAnalysisTitle=Analyse anwenden
attackGraphs.abortAnalysisTitle=Analyse verwerfen
attackGraphs.acceptAnalysisDialog=Wollen sie die aktuelle Sensitivitätsanalyse auf den Graphen anwenden?
attackGraphs.documentation=Dokumentation...
attackGraphs.pageReferenceTooltip=Referenziert von
attackGraphs.workerStatus=Hintergrundprozesse in Arbeit, um den Attack-Graph zu aktualisieren! Bitte warten Sie...
  `);
  }
}
