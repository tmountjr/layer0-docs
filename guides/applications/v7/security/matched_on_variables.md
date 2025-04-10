---
title: Matched On Variables
---

A short description of the information contained for each variable referenced in the **Matched On** field is provided below.
-   **ARGS:** Contains the names for:
    -   All query string parameters
    -   All parameters in the `POST` request body
-   **ARGS_COMBINED_SIZE:** Describes the combined size for:
    -   All query string parameters
    -   All parameters in the `POST` request body
-   **ARGS_GET:** Contains all query string parameters.
-   **ARGS_GET_NAMES:** Contains the names of all query string parameters.
-   **ARGS_NAMES:** Contains the names for all request parameters.
-   **ARGS_POST:** Contains all key-value pairs within a `POST` request.
-   **ARGS_POST_NAMES:** Contains the names of all parameters in the `POST` request body.
-   **AUTH_TYPE:** Describes the built-in HTTP authentication method (e.g., Basic) used to validate a user.
-   **DURATION:** Describes the length of time, in milliseconds, it took to fulfill the request.
-   **ENV:** Identifies an environment variable.
-   **FILES:** Describes the original file name for a multipart/form-data (e.g., byte range) request.
-   **FILES_COMBINED_SIZE:** Describes the total file size of the request body for a multipart/form-data (e.g., byte range) request.
-   **FILES_NAMES:** Contains a list of form fields that were used for file upload for a multipart/form-data request.
-   **FULL_REQUEST:** Describes the request including request headers and the request body.
-   **FULL_REQUEST_LENGTH:** Indicates the number of bytes that may be used by `FULL_REQUEST`.
-   **FILES_SIZES:** Contains a list of file sizes for a multipart/form-data (e.g., byte range) request.
-   **FILES_TMPNAMES:** Contains a list of file names for the temporary files generated for a multipart/form-data (e.g., byte range) request.
-   **GEO:** Contains a geographical description of the request. This variable may contain any of the following fields:
    -   **AREA_CODE:** Identifies the area code from which the request originated. This information is only gathered for requests that originate from the United States.
    -   **CITY:** Identifies the name of the city from which the request originated.
    -   **COUNTRY_CODE:** Identifies the country from which the request originated through its two character [country code](/applications/reference/country_codes).
    -   **COUNTRY_CODE3:** Identifies the country from which the request originated through its country code. This code may consist of up to three characters.
    -   **COUNTRY_CONTINENT:** Identifies the continent from which the request originated by its two character continent code (e.g., EU).
    -   **COUNTRY_NAME:** Identifies the country from which the request originated by its name.
    -   **DMA_CODE:** Identifies the metropolitan area code from which the request originated. This information is only gathered for requests that originate from the United States.
    -   **LATITUDE:** Identifies the latitude from which the request originated.
    -   **LONGITUDE:** Identifies the longitude from which the request originated.
    -   **POSTAL_CODE:** Identifies the postal code from which the request originated.
    -   **REGION:** Identifies the region from which the request originated by its two character region code.
        -   **US:** Identifies a state.
        -   **Canada:** Identifies a province.
-   **HIGHEST_SEVERITY:** Indicates the highest threat severity assigned to the request.
-   **INBOUND_DATA_ERROR:** Set to `1` when the request body size exceeds the corresponding profile's **Max File Size** option.
-   **MULTIPART_CRLF_LF_LINES:** Set to `1` when a multipart request (e.g., byte range request) uses mixed line terminators.
-   **MULTIPART_FILENAME:** Contains a request's multipart data.
-   **MULTIPART_NAME:** Contains a request's multipart data.
-   **MULTIPART_STRICT_ERROR:** Set to `1` when an error is detected in the request body for a multipart/form-data (e.g., byte range) request.
-   **MULTIPART_UNMATCHED_BOUNDARY:** Set to `1` when a faux boundary is detected within a multipart/form-data (e.g., byte range) request.
-   **PATH_INFO:** Contains the extra path information that may be appended to a URL. For example, this variable would contain "/abc" for the following request: /index.php/abc.
-   **QUERY_STRING:** Contains the entire raw query string defined in the request URL.
-   **REMOTE_ADDR:** Identifies the client that submitted the request by its IP address.
-   **REMOTE_HOST:** Identifies a host by its hostname or IP address.
-   **REMOTE_PORT:** Contains the port defined in the request.
-   **REMOTE_USER:** Identifies the user name of an authenticated user.
-   **REQBODY_ERROR:** Indicates whether an error occurred during the parsing of the request body. Valid values are:
    -   **0:** An error was not detected.
    -   **1:** Error
-   **REQBODY_ERROR_MSG:** Contains an error message if an error occurred during the parsing of the request body.
-   **REQBODY_PROCESSOR:** Contains the name of the request body parser.
-   **REQUEST_BASENAME:** Identifies the file name of the requested content.
-   **REQUEST_BODY:** Contains the URL-encoded request body.
-   **REQUEST_BODY_LENGTH:** Contains the size of the request body in bytes.
-   **REQUEST_COOKIES:** Contains the set of request cookie values.
-   **REQUEST_COOKIES_NAMES:** Contains the set of request cookie names.
-   **REQUEST_FILENAME:** Identifies the request's base URL. This value does not include query strings.

    **Example:** `/path/page.html`

-   **REQUEST_HEADERS:** Contains a set of request header values.
-   **REQUEST_HEADERS_NAMES:** Contains a set of request header names.
-   **REQUEST_LINE:** Contains the request method, URL, and HTTP version.
-   **REQUEST_METHOD:** Contains the request method.
-   **REQUEST_PROTOCOL:** Contains the request's HTTP version.
-   **REQUEST_URI:** Contains the request URL starting directly after the hostname.
-   **REQUEST_URI_RAW:** Contains the raw request URL.
-   **SESSION:** Contains session information.
-   **STREAM_INPUT_BODY:** Contains the raw request body.
-   **TX:** Contains transaction information and transaction anomaly score.
-   **URLENCODED_ERROR:** Indicates that invalid URL encoding was detected.
-   **USERAGENT_IP:** Indicates the IP address from which the request originated.
-   **WEBSERVER_ERROR_LOG:** Contains zero or more error messages.
