import styled from "styled-components";

export const DemoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 10px;
  padding: 0 20px;

  .shadow {
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  }

  .form-wrapper {
    margin: 10px;
    flex: 1;
    border-radius: 4px;
    padding: 40px 20px;
    background-color: #fff;

    .ant-table-cell {
      .ant-form-item {
        margin-bottom: 0;
      }
    }
  }

  .code-wrapper {
    flex: 1;
    margin: 10px;
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    border-radius: 4px;
    pre {
      border-radius: 4px;
      background-color: #d8dded;
      padding: 16px;
      width: 100%;
      margin: 0;
    }
  }
`;