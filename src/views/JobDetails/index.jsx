import { Button, Flex } from 'antd';
import React, { memo } from 'react';
import './jobDetails.scss';
import { IconInstagram } from '../../assets/icons/IconInstagram';
import { IconLink } from '../../assets/icons/IconLink';
import { IconMail } from '../../assets/icons/IconMail';
import { IconPhoneSmall } from '../../assets/icons/IconPhoneSmall';
import { IconSave } from '../../assets/icons/IconSave';

const JobDetails = memo(() => {
    return (
        <>
            <div className="job-details">
                <Flex
                    align="center"
                    justify="space-between"
                    className="job-details-label"
                >
                    <h3>Job Details</h3>
                    <span>
                        Home / Find Job Label / Graphics & Design / Job Details
                    </span>
                </Flex>
            </div>
            <Flex justify="space-between" className="job-details-content">
                <Flex className="job-details-title" gap={24} flex={1}>
                    <div>
                        <IconInstagram />
                    </div>
                    <Flex justify="space-around" vertical>
                        <Flex className="job-title" align="center" gap={12}>
                            <h4>Senior UX Designer</h4>
                            <span className="featured">Featured</span>
                            <span className="fullTime">Full Time</span>
                        </Flex>
                        <Flex align="center" gap={12}>
                            <Flex align="center" gap={8}>
                                <IconLink />
                                <span>https://instagram.com</span>
                            </Flex>
                            <Flex align="center" gap={8}>
                                <IconPhoneSmall />
                                <span>(406) 555-0120</span>
                            </Flex>
                            <Flex align="center" gap={8}>
                                <IconMail />
                                <span>career@instagram.com</span>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex
                    vertical
                    gap={8}
                    justify="space-around"
                    className="apply-btn"
                >
                    <Flex align="center" gap={12}>
                        <span className="btn-save">
                            <IconSave />
                        </span>
                        <Button type="primary">Apply Now</Button>
                    </Flex>
                    <Flex
                        align="center"
                        gap={4}
                        className="expired-date"
                        justify="flex-end"
                    >
                        <span>Job expire in:</span>
                        <span> June 30, 2021</span>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
});

export default JobDetails;
