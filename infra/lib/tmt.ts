import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { ARecord, CnameRecord, PublicHostedZone } from 'aws-cdk-lib/aws-route53';
import { Bucket, HttpMethods } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';

export interface TmtProps extends StackProps {

}

export class Tmt extends Stack {
    constructor(scope: Construct, id: string, props: TmtProps) {
        super(scope, id, props);

        const se_threemusketeers= new PublicHostedZone(this, 'se_threemusketeers', {
            zoneName: 'threemusketeers.se',
            caaAmazon: true
        });
        const se_threemuskytears = new PublicHostedZone(this, 'se_threemuskytears', {
            zoneName: 'threemuskytears.se',
            caaAmazon: true
        });


    const bucket = new Bucket(this, 'bucket', {
        bucketName: 'threemuskytears.se',
        websiteIndexDocument: 'index.html',
        websiteErrorDocument: '404.html',
        cors: [{
          allowedMethods: [HttpMethods.GET, HttpMethods.HEAD],
          allowedOrigins: ['*'],
          allowedHeaders: ['*']
        }],
        publicReadAccess: true,
        autoDeleteObjects: true,
        removalPolicy: RemovalPolicy.DESTROY
      });
  
      new BucketDeployment(this, 'deploy', {
        sources: [Source.asset('../build')],
        destinationBucket: bucket,
        retainOnDelete: false
      });

      new CnameRecord(this, 'dns', {
          zone: se_threemuskytears,
          recordName: 'main-domain',
          domainName: bucket.bucketWebsiteDomainName
      })
      new CnameRecord(this, 'dns-alias', {
          zone: se_threemusketeers,
          recordName: 'main-domain',
          domainName: bucket.bucketWebsiteDomainName
      })
    }
}