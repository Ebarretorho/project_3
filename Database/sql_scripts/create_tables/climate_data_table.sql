-- Table: public.climate_data

-- DROP TABLE IF EXISTS public.climate_data;

CREATE TABLE IF NOT EXISTS public.climate_data
(
    state character varying COLLATE pg_catalog."default",
    year integer,
    avg_temp numeric(18,2),
    rainfall numeric(18,2),
    state_id integer
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.climate_data
    OWNER to postgres;