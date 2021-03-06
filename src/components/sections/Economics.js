import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class Economics extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const sectionHeader = {
      title: '',
      paragraph: ''
    };


    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>

            <div className={splitClasses}>


                <SectionHeader data={sectionHeader} className="center-content" />


              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-12">
                  Token Economics
                  </h3>

                  <p>Max Supply: 1,000,000,000 (1 Billion)</p>

                <ul>

                <li>10% to Developers and Investors</li>
                <li>90% to Liquidity Rewards</li>


                </ul>

                <p>10% of all newly minted DGOV goes directly to the community fund to be used for maintaining the platform as determined by DGOV holders.</p>


                </div>


                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    className="has-shadow"
                    src={require('./../../assets/images/Pie.jpg')}
                    alt="Features split 03"
                    width={528}
                    height={396} />
                </div>
              </div>

            



            </div>
          </div>
        </div>
      </section>
    );
  }
}

Economics.propTypes = propTypes;
Economics.defaultProps = defaultProps;

export default Economics;
