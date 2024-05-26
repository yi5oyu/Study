# Travis CI에서 실행되어, EC2 인스턴스에 SSH로 접속
# pem 키를 이용한 SSH 접속

#!/bin/bash
# Bash 셸에서 실행됨을 명시 (스크립트를 실행할 때 사용할 인터프리터를 지정)

set -e
# 스크립트 실행 중에 명령이 실패하면 즉시 스크립트 실행을 중지 (오류 발생 시 후속 명령이 실행되지 않음)

eval $(ssh-agent -s)
# ssh-agent를 시작하고 환경 변수를 설정합니다.

echo "$EC2_KEY_BASE64" | base64 --decode > my-ec2-key.pem
# 사전에 pem키를 Base64로 인코딩해 Travis CI의 환경변수로 넣어줌
# 환경 변수에서 Base64로 인코딩된 키를 디코딩하여 .pem 파일 생성

chmod 400 my-ec2-key.pem
# 권한 부여

ssh -o StrictHostKeyChecking=no -i $EC2_KEY ec2-user@$EC2_HOST << 'EOF'
echo \$DOCKER_PASSWORD | docker login -u \$DOCKER_USERNAME --password-stdin
docker pull $DOCKER_USERNAME/myapp
docker-compose down || true
docker-compose up -d
EOF
#
# ssh: 원격 서버에 접속하기 위한 명령어
# -o StrictHostKeyChecking=no: 호스트 키 검사를 비활성화 (처음 접속 시 호스트 키를 자동으로 신뢰하도록 설정)
# -i $EC2_KEY: SSH 프라이빗 키 파일을 지정 (Travis CI 환경 변수로 설정된 프라이빗 키 파일 경로)
# ec2-user@$EC2_HOST: 접속할 EC2 인스턴스의 사용자명(ec2-user)과 호스트($EC2_HOST는 EC2 인스턴스의 퍼블릭 IP 또는 호스트네임)
# << 'EOF' 이 부분부터 EOF 사이에 있는 명령어들이 SSH를 통해 원격 서버에서 실행
# EOF(End-Of-File) : CLI 환경의 명령어에 입력으로 사용할 수 있음 (명령어를 하나의 블록으로 원격 서버에서 실행)
# 
# docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD: Docker Hub에 로그인
# docker pull $DOCKER_USERNAME/myapp: Docker Hub에서 최신 이미지를 가져오는 명령
# docker-compose down || true: 현재 실행 중인 Docker Compose 서비스를 중지하고 관련된 모든 컨테이너, 네트워크, 볼륨을 제거 / 명령이 실패해도 스크립트 실행을 계속하도록 함 (실행 중인 Docker Compose 서비스가 없어서 실패해도 무시하고 다음 명령을 계속 실행)
# docker-compose up : 파일에 정의된 모든 서비스를 빌드
# -d: --detach 옵션 (컨테이너를 백그라운드에서 실행함)
