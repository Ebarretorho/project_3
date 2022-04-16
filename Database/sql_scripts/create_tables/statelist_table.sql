-- Table: public.statelist

-- DROP TABLE IF EXISTS public.statelist;

CREATE TABLE IF NOT EXISTS public.statelist
(
    "StateID" integer,
    "State" character varying(50) COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.statelist
    OWNER to postgres;