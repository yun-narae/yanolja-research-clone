#!/bin/bash

# Pretendard 폰트 다운로드 스크립트

FONT_DIR="public/fonts/Pretendard/public/static"
RELEASE_URL="https://github.com/orioncactus/pretendard/releases/download/v1.3.9/Pretendard-1.3.9.zip"

# 폰트 디렉토리 생성
mkdir -p "$FONT_DIR"

echo "Pretendard 폰트를 다운로드하는 중..."

# 임시 디렉토리에 다운로드
TEMP_DIR=$(mktemp -d)
cd "$TEMP_DIR"

# 폰트 다운로드
if command -v curl &> /dev/null; then
    curl -L -o pretendard.zip "$RELEASE_URL"
elif command -v wget &> /dev/null; then
    wget -O pretendard.zip "$RELEASE_URL"
else
    echo "Error: curl 또는 wget이 필요합니다."
    exit 1
fi

# 압축 해제
if command -v unzip &> /dev/null; then
    unzip -q pretendard.zip
else
    echo "Error: unzip이 필요합니다."
    exit 1
fi

# 필요한 폰트 파일만 복사
if [ -d "public/static" ]; then
    cp public/static/Pretendard-*.otf "$OLDPWD/$FONT_DIR/"
    echo "폰트 파일이 성공적으로 설치되었습니다!"
    echo "설치 위치: $OLDPWD/$FONT_DIR"
else
    echo "Error: 폰트 파일을 찾을 수 없습니다."
    exit 1
fi

# 임시 파일 정리
cd "$OLDPWD"
rm -rf "$TEMP_DIR"

echo "완료!"

