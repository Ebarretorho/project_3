CREATE View crops_climate_data AS (
SELECT P."SurveyYear", P."Commodity", SUM("Value") "Value", SUM("Volume") "Volume", AVG("UnitCost"::Numeric(10,6))::Numeric(10,2) "AvgPrice", AVG(avg_temp::Numeric(10,6))::Numeric(10,2) "AvgTemp",
	SUM(rainfall) "TotalRainfall"
FROM "CropsProduction" P
JOIN climate_data D
ON P."StateID" = D.state_id
AND P."SurveyYear" = D.year
GROUP BY "SurveyYear", "Commodity")



