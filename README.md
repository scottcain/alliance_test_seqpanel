# alliance_test_seqpanel
simple test app for GenericGeneSeqPanel with Alliance data

## Overview

    yarn
    yarn build
    yarn preview

which runs a local test instance at localhost:4173

## Deploy to IO

    yarn deploy

which puts a test instance on https://scottcain.github.io/alliance_test_seqpanel/

## What is getting tested?

That the configuration works to fetch feature and sequence data from 
the Alliance JBrowse S3 bucket.  Specifically, these parameters in
`src/App.tsx`:

      refseq="6"
      start={18170686}
      end={18322769}
      gene="Cftr"
      nclistbaseurl="https://s3.amazonaws.com/agrjbrowse/docker/5.4.0/MGI/mouse/"
      urltemplate="tracks/All_Genes/{refseq}/trackData.jsonz"
      fastaurl="https://s3.amazonaws.com/agrjbrowse/fasta/GCF_000001635.27_GRCm39_genomic.fna.gz"

for each species. Everything works pretty much as one would expect. The GFF "Name" of the
feature is used in every case, except (for some reason), yeast where the ID is used
(eg, instead of using "MUS81", you have to use "YDR386W").
