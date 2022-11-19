import styled from "styled-components";

export const PageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: stretch;

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
    margin: 40px;
    width: 600px;
    border-radius: 4px;
    padding: 40px 20px;

    .ant-table-cell {
      .ant-form-item {
        margin-bottom: 0;
      }
    }
  }

  .code-wrapper {
    flex: 1;
    margin: 40px;
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    border-radius: 4px;
    pre {
      border-radius: 4px;
      background-color: lightgray;
      padding: 16px;
      width: 100%;
      margin: 0;
    }
  }
`;
