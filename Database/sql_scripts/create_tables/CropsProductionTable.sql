-- Table: public.CropsProduction

-- DROP TABLE IF EXISTS public."CropsProduction";

CREATE TABLE IF NOT EXISTS public."CropsProduction"
(
    "Survey_ID" integer NOT NULL,
    "SurveyYear" integer,
    "StateID" integer,
    "Commodity" character varying(50) COLLATE pg_catalog."default",
    "DataItem" character varying(250) COLLATE pg_catalog."default",
    "Value" bigint,
    "Volume" bigint,
    "UnitCost" money,
    "Measure" character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT "CropsProduction_pkey" PRIMARY KEY ("Survey_ID")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."CropsProduction"
    OWNER to postgres;