import React from "react";
import { GenericGeneSeqPanel } from "generic-sequence-panel";

export default function App() {
  return (
  <div>
    Mouse <br />
    <GenericGeneSeqPanel
      refseq="6"
      start={18170686}
      end={18322769}
      gene="Cftr"
      nclistbaseurl="https://s3.amazonaws.com/agrjbrowse/docker/5.4.0/MGI/mouse/"
      urltemplate="tracks/All_Genes/{refseq}/trackData.jsonz"
      fastaurl="https://s3.amazonaws.com/agrjbrowse/fasta/GCF_000001635.27_GRCm39_genomic.fna.gz"
    />
    Yeast <br />
    <GenericGeneSeqPanel
      refseq="chrIV"
      start={1246084}
      end={1247982}
      gene="YDR386W"
      nclistbaseurl="https://s3.amazonaws.com/agrjbrowse/docker/5.4.0/SGD/yeast/"
      urltemplate="tracks/All_Genes/{refseq}/trackData.jsonz"
      fastaurl="https://s3.amazonaws.com/agrjbrowse/fasta/GCF_000146045.2_R64_genomic.fna.gz"
    />
    X. laevis <br />
    <GenericGeneSeqPanel
      refseq="chr3S"
      start={78417070}
      end={78487559}
      gene="cftr.S"
      nclistbaseurl="https://s3.amazonaws.com/agrjbrowse/docker/5.4.0/XenBase/x_laevis/"
      urltemplate="tracks/All_Genes/{refseq}/trackData.jsonz"
      fastaurl="https://s3.amazonaws.com/agrjbrowse/fasta/XENLA_9.2_genome.fa.gz"
    />
    X. tropicalis <br />
    <GenericGeneSeqPanel
      refseq="Chr03"
      start={58953905}
      end={59012508}
      gene="cftr"
      nclistbaseurl="https://s3.amazonaws.com/agrjbrowse/docker/5.4.0/XenBase/x_tropicalis/"
      urltemplate="tracks/All_Genes/{refseq}/trackData.jsonz"
      fastaurl="https://s3.amazonaws.com/agrjbrowse/fasta/XENTR_9.1_genome.fa.gz"
    />
    Zebrafish <br />
    <GenericGeneSeqPanel
      refseq="18"
      start={20560616}
      end={20565982}
      gene="wee2"
      nclistbaseurl="https://s3.amazonaws.com/agrjbrowse/docker/5.4.0/zfin/zebrafish-11/"
      urltemplate="tracks/All_Genes/{refseq}/trackData.jsonz"
      fastaurl="https://s3.amazonaws.com/agrjbrowse/fasta/GCF_000002035.6_GRCz11_genomic.fna.gz"
    />
    Worm <br />
    <GenericGeneSeqPanel
      refseq="II"
      start={162374}
      end={170631}
      gene="etr-1"
      nclistbaseurl="https://s3.amazonaws.com/agrjbrowse/docker/5.4.0/WormBase/c_elegans_PRJNA13758/"
      urltemplate="tracks/All_Genes/{refseq}/trackData.jsonz"
      fastaurl="https://s3.amazonaws.com/agrjbrowse/fasta/GCF_000002985.6_WBcel235_genomic.fna.gz"
    />
    Fly <br />
    <GenericGeneSeqPanel
      refseq="2R"
      start={7317924}
      end={7381899}
      gene="Dscam1"
      nclistbaseurl="https://s3.amazonaws.com/agrjbrowse/docker/5.4.0/FlyBase/fruitfly/"
      urltemplate="tracks/All_Genes/{refseq}/trackData.jsonz"
      fastaurl="https://s3.amazonaws.com/agrjbrowse/fasta/GCF_000001215.4_Release_6_plus_ISO1_MT_genomic.fna.gz"
    />
    Human <br />
    <GenericGeneSeqPanel
      refseq="7"
      start={117287120}
      end={117715971}
      gene="CFTR"
      nclistbaseurl="https://s3.amazonaws.com/agrjbrowse/docker/5.4.0/human/"
      urltemplate="tracks/All_Genes/{refseq}/trackData.jsonz"
      fastaurl="https://s3.amazonaws.com/agrjbrowse/fasta/GCF_000001405.40_GRCh38.p14_genomic.fna.gz"
    />
    Rat <br />
    <GenericGeneSeqPanel
      refseq="4"
      start={46560885}
      end={46728759}
      gene="Cftr"
      nclistbaseurl="https://s3.amazonaws.com/agrjbrowse/docker/5.4.0/RGD/rat/"
      urltemplate="tracks/All_Genes/{refseq}/trackData.jsonz"
      fastaurl="https://s3.amazonaws.com/agrjbrowse/fasta/GCF_015227675.2_mRatBN7.2_genomic.fna.gz"
    />
  </div>
  );
}
