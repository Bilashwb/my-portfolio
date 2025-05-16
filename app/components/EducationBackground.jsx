import React from 'react';
import {
  Card,
  Text,
  Divider,
  Icon,
  InlineStack,
  Box,
  Button
} from '@shopify/polaris';
import {
  CalendarTimeIcon,
  LocationIcon,
  ReceiptYenFilledIcon
} from '@shopify/polaris-icons';

const educationData = [
  {
    school: 'Maulana Abul Kalam Azad University of Technology, West Bengal',
    degree: 'M.Tech in Computer Science & Engineering',
    year: '2018 – 2020',
  },
  {
    school: 'Maulana Abul Kalam Azad University of Technology, West Bengal',
    degree: 'B.Tech in Computer Science & Engineering',
    year: '2015 – 2018',
  },
  {
    school: 'West Bengal State Council of Technical Education, West Bengal',
    degree: 'Diploma in Information Technology',
    year: '2012 – 2015',
  },
];

const EducationBackground = () => {
  return (
    <Card title="Education Background" sectioned>
      <Text variant="bodyMd" fontWeight="bold">
        My Academic Journey
      </Text>
      <Divider />
      <Box paddingBlockStart="400">
        {educationData.map((edu, index) => (
          <Box key={index} paddingBlockEnd="400">
          <Text variant="headingSm">{edu.degree}</Text>

           <Text variant="bodyMd" color="subdued">{edu.school}</Text>

           <Text variant="bodySm" color="subdued">{edu.year}</Text>
            {index < educationData.length - 1 && (
              <Box paddingBlockStart="300">
                <Divider />
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default EducationBackground;
