import React from 'react';
import { Tag, Row, Col, Divider, Table } from 'antd';

interface GoldSideSheetProps {
  data: any;
}

const GoldSideSheet: React.FC<GoldSideSheetProps> = ({ data }) => {
  return (
    <div>
      <h3>📊 Risk Graph</h3>
      <Row gutter={10}>
        {data.riskLevels.map((color: string, index: number) => (
          <Col key={index}>
            <div
              style={{
                width: 50,
                height: 50,
                backgroundColor: color,
                borderRadius: 4,
              }}
            />
          </Col>
        ))}
      </Row>

      <Divider />

      <h3>🛡 Findings</h3>
      {data.findings.map((finding: string, index: number) => (
        <Tag key={index} color="red">
          {finding}
        </Tag>
      ))}

      <Divider />

      <h3>🐞 Vulnerabilities</h3>
      <p>Critical: {data.vulnerabilities.critical}</p>
      <p>High: {data.vulnerabilities.high}</p>
      <p>Medium: {data.vulnerabilities.medium}</p>
      <p>Low: {data.vulnerabilities.low}</p>

      <Divider />

      <h3>🔗 Dependencies</h3>
      <p>Old: {data.dependencies.old}</p>
      <p>New: {data.dependencies.new}</p>
      <p>Status: {data.dependencies.status}</p>

      <Divider />

      <h3>📌 Usage Across Projects</h3>
      <Table
        dataSource={data.usage}
        columns={[{ title: 'Project', dataIndex: 'name', key: 'name' }]}
        pagination={false}
      />
    </div>
  );
};

export default GoldSideSheet;
